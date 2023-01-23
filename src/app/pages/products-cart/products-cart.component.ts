import { Component, OnInit } from '@angular/core';
import { ProductsMarketInterface } from 'src/app/interfaces/products/products.interface';
import { showImageMarket, showImageProduct } from 'src/app/pipes/images/image.pipes';
import { CartMarketValueInterface, cart_market } from 'src/app/ultil/markets';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {

  productsInCart: CartMarketValueInterface[] = []

  constructor() { }

  subTotal: number = 0

  ngOnInit(): void {
    this.getProductFromMarket()
  }

  getImage(url: string) {
    return showImageProduct(url)
  }

  getimageMarket(url: string){
    return showImageMarket(url)
  }

  getProductFromMarket() {
    this.productsInCart = cart_market    
  }

  totalPrice(price: string, id: number | undefined, market_id: number) {
    let product = this.productsInCart.find(market => market.market_id == market_id)?.products.find(product => product.id == id)
    if (product) {
      product['quantity'] = product.quantity ? product.quantity : 1
      const total = (Number(price.replace(',', '.')) * product.quantity ).toFixed(2).replace('.', ',')
      return total
    }
    return '0,00'
  }

  calcTotalPrice() {
    let total = 0
    this.productsInCart.map(product => {
      let subTotal = 0
      product.products.map(product => {
        const qtd = product.quantity ? product.quantity : 0
        subTotal = Number(subTotal.toFixed(2).replace(',', '.')) + Number((Number(product.price.replace(",", ".")) * qtd).toFixed(2))
      })

      product['subTotal'] = subTotal.toFixed(2).replace('.', ',') 
      total = total + subTotal
    })

    return total.toFixed(2).replace(".", ",")
  }

  remove(market_id: number, product: ProductsMarketInterface, market_index: number, product_index: number) {
    const market = this.productsInCart.find(market => market.market_id == market_id)
    const marketDb = cart_market.find(market => market.market_id == market_id)

    if(market && marketDb){
      market.products.splice(product_index, 1)
      if(!market.products.length) cart_market.splice(market_index, 1)
    }
  }

  finishSale(products: CartMarketValueInterface[]) {
    if(!cart_market.length) {
      Swal.fire("MD Informa", "Seu carrinho está vazio.", "info")
      return
    }
    Swal.fire("Sucesso!", "Compra finalizada com sucesso.", "success")
    cart_market.splice(0, cart_market.length)
  }

}
