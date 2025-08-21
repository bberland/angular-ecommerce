import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
