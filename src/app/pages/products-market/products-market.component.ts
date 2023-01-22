import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsMarketInterface } from 'src/app/interfaces/products/products.interface';
import { showImageProduct } from 'src/app/pipes/images/image.pipes';
import { addProductInCart, generateProduct, products } from 'src/app/ultil/markets';
import { ProductsDetailsComponent } from '../products-details/products-details.component';

@Component({
  selector: 'app-products-market',
  templateUrl: './products-market.component.html',
  styleUrls: ['./products-market.component.css']
})
export class ProductsMarketComponent implements OnInit {

  products: ProductsMarketInterface[] = []
  market_id: number = 0
  constructor(
    private ngbModal: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.market_id = Number(this.router.url.split("/")[2])
    this.getProductFromMarket()
  }

  showImageProduct(url: string){
    return showImageProduct(url)
  }

  getProductFromMarket(){
    generateProduct()
    this.products = products
  }

  openDetailsProduct(product: ProductsMarketInterface){
    const refModal = this.ngbModal.open(ProductsDetailsComponent, { size: "xl" })
    refModal.componentInstance.product = product
    refModal.componentInstance.market_id = this.market_id
    refModal.result.then(res => {
      refModal.close()
    })
  }

  addInCar(product: any){
    addProductInCart(product, this.market_id)
  }

}
