import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsCartComponent } from './pages/products-cart/products-cart.component';
import { ProductsMarketComponent } from './pages/products-market/products-market.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products-market", component: ProductsMarketComponent},
  {path: "cart-market", component: ProductsCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
