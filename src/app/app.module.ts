import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsMarketComponent } from './pages/products-market/products-market.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { FormsModule } from '@angular/forms';
import { ProductsCartComponent } from './pages/products-cart/products-cart.component';
import { StatusBarComponent } from './component/status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsMarketComponent,
    ProductsDetailsComponent,
    ProductsCartComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
