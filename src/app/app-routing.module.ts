import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsCartComponent } from './pages/products-cart/products-cart.component';
import { ProductsMarketComponent } from './pages/products-market/products-market.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products-market/:id", component: ProductsMarketComponent},
  {path: "cart-market", component: ProductsCartComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
