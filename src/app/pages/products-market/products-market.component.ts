import { Component, OnInit } from '@angular/core';

interface ProductsMarket{
  name: string,
  description: string,
  value: string,
  image: string,
  obsProduct: string
}

@Component({
  selector: 'app-products-market',
  templateUrl: './products-market.component.html',
  styleUrls: ['./products-market.component.css']
})
export class ProductsMarketComponent implements OnInit {

  products: ProductsMarket[] = []

  product_default = '../../../assets/acém-bovino.jfif'

  constructor() { }

  ngOnInit(): void {
    this.getProductFromMarket()
  }

  getProductFromMarket(){

    const getProducts = []

    for (let index = 0; index < 10; index++) {
      getProducts.push({
        name: 'Acém Bovino sem Osso',
        description: 'O Acém Bovino está localizado na parte dianteira do boi, é uma carne de ótima qualidade, rígida e dura, é muito utilizada para o preparo de tortas, escondidinhos, ensopadinhos e pratos com molhos. Escolha a melhor opção de preparo para o seu paladar.',
        obsProduct: 'Preço/kg',
        image: '',
        value: '15,00'
      })      
    }

    this.products = getProducts
  }

  openDetailsProduct(){
    window.prompt("openDetailsProduct")
  }

  addInCar(){
    window.prompt('addInCar')
  }

}
