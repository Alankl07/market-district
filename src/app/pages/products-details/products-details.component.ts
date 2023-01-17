import { Component, OnInit } from '@angular/core';
import { ProductsMarketInterface } from 'src/app/interfaces/products/products.interface';
import { showImageProduct } from 'src/app/pipes/images/image.pipes';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product: ProductsMarketInterface = {
    description: '',
    image: '',
    name: '',
    obsProduct: '',
    price: ''
  } 

  qtd: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  showImageProduct(url: string){
    return showImageProduct(url)
  }

  total(){
    console.log(this.product.price, this.qtd)
    return (Number(this.product.price.replace(",",".")) * Number(this.qtd)).toFixed(2).replace(".",",")
  }

}
