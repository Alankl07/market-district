import Swal from "sweetalert2"

interface CartMarket{
    market_id: number,
    product_id: number,
    quantity: number
}

interface PorductInterface{
    id: number,
    name: string,
    description: string,
    obsProduct: string,
    image: string,
    price: string,
    quantity: number
}

const img_assai = '../../../assets/assaiatacadao.jfif'
const img_atacadao = '../../../assets/atacadao.png'
const img_big = '../../../assets/bigbompreco.png'
const img_gbarbosa = '../../../assets/gbarbosa.png'
const img_mercantil = '../../../assets/mercantil.png'
const img_atajun = '../../../assets/atacadao.png'
const img_brasil = ''
const img_gbjun = '../../../assets/gbarbosa.png'

export interface CartMarketValueInterface{
    market_id: number,
    market_name: string,
    image: string,
    subTotal?: string,
    products: PorductInterface[]
}

export const markets_util = [
    { name: 'Assai Acadadista', image: img_assai },
    { name: 'Atacadão', image: img_atacadao },
    { name: 'Big Bompreço', image: img_big },
    { name: 'G Barbosa', image: img_gbarbosa },
    { name: 'Mercantil', image: img_mercantil },
    { name: 'Brasil Mercado', image: img_brasil },
    { name: 'G Barbosa Junior ', image: img_gbjun },
    { name: 'Atacadão Junior', image: img_atajun },
].map((market: any, i) => {
    market['id'] = i + 1
    return market
})

export let products:any = []

export function generateProduct(){
    products = []
    for (let index = 0; index < 10; index++) {
        products.push({
          id: products.length + 1,
          name: 'Acém Bovino sem Osso',
          description: 'O Acém Bovino está localizado na parte dianteira do boi, é uma carne de ótima qualidade, rígida e dura, é muito utilizada para o preparo de tortas, escondidinhos, ensopadinhos e pratos com molhos. Escolha a melhor opção de preparo para o seu paladar.',
          obsProduct: 'Preço/kg',
          image: '',
          price: '15,00',
          quantity: 1
        })      
      }
}

export const cart_market: CartMarketValueInterface[] = []


export function addProductInCart(product: PorductInterface, market_id: number){
    Swal.fire("Sucesso!", `Produdo adicionado no carrinho.`, "success")
    const market = cart_market.find(market => market.market_id == market_id)
    if(market){
      const findProduct = market.products.find(productFind => productFind.id == product.id )
      if(findProduct) findProduct.quantity++ 
      else market.products.push(product)
    }else{
      const market = markets_util.find(market => market.id == market_id)
      cart_market.push({
        market_id,
        market_name: market.name,
        image: market.image,
        products: [product]
      })  
    }
}