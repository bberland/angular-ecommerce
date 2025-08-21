import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  // State interno con BehaviorSubject
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Cargar productos iniciales
  loadProducts(): void {
    this.http.get<Product[]>(this.apiUrl)
      .subscribe(products => this.productsSubject.next(products));
  }

  // Agregar un nuevo producto
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap(newProduct => {
        const current = this.productsSubject.value;
        this.productsSubject.next([...current, newProduct]);
      })
    );
  }

  // Eliminar un producto por ID
  deleteProduct(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const current = this.productsSubject.value;
        this.productsSubject.next(current.filter(p => p.id !== id));
      })
    );
  }
}
