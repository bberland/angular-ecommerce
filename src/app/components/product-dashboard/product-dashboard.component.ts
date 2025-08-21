import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  products$!: Observable<Product[]>; // Observable
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // Nos suscribimos al flujo reactivo
    this.products$ = this.productService.products$;

    // Dispara la carga inicial
    this.productService.loadProducts();

    this.initForm();
  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
  }

  openAddProductModal(content: TemplateRef<any>) {
    this.productForm.reset({ price: 0, stock: 0 });
    this.modalService.open(content, { size: 'md' });
  }

  saveProduct(modal: any) {
    if (this.productForm.valid) {
      this.products$.subscribe(products => {
        const maxId = products.length > 0 ? Math.max(...products.map(p => Number(p.id))) : 0;
        const newProduct: Product = {
          id: (maxId + 1).toString(), // Convertimos a string para que funcione con json-server
          ...this.productForm.value
        };

        this.productService.addProduct(newProduct).subscribe(() => {
          modal.close();
        });
      }).unsubscribe();
    }
  }

  deleteProduct(id: number | string) {
    this.productService.deleteProduct(id).subscribe();
  }
}
