import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsMarketInterface } from 'src/app/interfaces/products/products.interface';
import { showImageProduct } from 'src/app/pipes/images/image.pipes';
import { ProductsDetailsComponent } from '../products-details/products-details.component';

@Component({
  selector: 'app-products-market',
  templateUrl: './products-market.component.html',
  styleUrls: ['./products-market.component.css']
})
export class ProductsMarketComponent implements OnInit {

  products: ProductsMarketInterface[] = []

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.getProductFromMarket()
  }

  showImageProduct(url: string){
    return showImageProduct(url)
  }

  getProductFromMarket(){

    const getProducts = []

    for (let index = 0; index < 10; index++) {
      getProducts.push({
        id: getProducts.length + 1,
        name: 'Acém Bovino sem Osso',
        description: 'O Acém Bovino está localizado na parte dianteira do boi, é uma carne de ótima qualidade, rígida e dura, é muito utilizada para o preparo de tortas, escondidinhos, ensopadinhos e pratos com molhos. Escolha a melhor opção de preparo para o seu paladar.',
        obsProduct: 'Preço/kg',
        image: '',
        price: '15,00'
      })      
    }

    this.products = getProducts
  }

  openDetailsProduct(product: ProductsMarketInterface){
    const refModal = this.ngbModal.open(ProductsDetailsComponent, { size: "xl" })
    refModal.componentInstance.product = product
    refModal.result.then(res => {
      refModal.close()
    })
  }

  addInCar(){
    window.prompt('addInCar')
  }

}
