import { Component, OnInit } from '@angular/core';
import { ProductsMarketInterface } from 'src/app/interfaces/products/products.interface';
import { showImageProduct } from 'src/app/pipes/images/image.pipes';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {

  productsInCart: ProductsMarketInterface[] = []

  constructor() { }

  ngOnInit(): void {
    this.getProductFromMarket()
  }

  getImage(url: string) {
    return showImageProduct(url)
  }

  getProductFromMarket() {

    const getProducts = []

    for (let index = 0; index < 5; index++) {
      getProducts.push({
        id: getProducts.length + 1,
        name: 'Acém Bovino sem Osso',
        description: 'O Acém Bovino está localizado na parte dianteira do boi, é uma carne de ótima qualidade, rígida e dura, é muito utilizada para o preparo de tortas, escondidinhos, ensopadinhos e pratos com molhos. Escolha a melhor opção de preparo para o seu paladar.',
        obsProduct: 'Preço/kg',
        image: '',
        price: '15,00'
      })
    }

    this.productsInCart = getProducts
  }

  totalPrice(price: string, id: number | undefined){
    let product = this.productsInCart.find(product => product.id == id)
    if(product){
      product.quantity = product.quantity ? product.quantity : 1
      const total = (Number(price.replace(',','.')) * product.quantity).toFixed(2).replace('.',',')
      return total
    }
    return '0,00'
  }

  calcTotalPrice(){
    let total = 0
    this.productsInCart.map(product => {
      const qtd = product.quantity ? product.quantity : 0
      total = Number(total.toFixed(2).replace(',','.')) + Number((Number(product.price.replace(",",".")) * qtd).toFixed(2))
    })

    return total.toFixed(2).replace(".",",")
  }

  remove(product: ProductsMarketInterface){
    window.alert(`Removendo ${product.name}`)
    this.productsInCart.pop()
  }

  finishSale(products: ProductsMarketInterface[]){
    window.alert(`Compra finalizada.`)
  }

}
