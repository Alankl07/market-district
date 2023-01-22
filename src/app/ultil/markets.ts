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

export interface CartMarketValueInterface{
    market_id: number,
    market_name: string,
    products: PorductInterface[]
}

export const markets_util = [
    { name: 'Assai Acadadista', image: '../../../assets/acaiatacadao.jfif' },
    { name: 'Atacadão', image: '../../../assets/atacadao.png' },
    { name: 'Big Bompreço', image: '../../../assets/bigbompreco.png' },
    { name: 'G Barbosa', image: '../../../assets/gbarbosa.png' },
    { name: 'Mercantil', image: '../../../assets/mercantil.png' },
    { name: 'Brasil Mercado', image: '' },
    { name: 'Atacadão Junior', image: '../../../assets/atacadao.png' },
    { name: 'G Barbosa Junior ', image: '../../../assets/gbarbosa.png' },
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
      market.products.push(product)
    }else{
      cart_market.push({
        market_id,
        market_name: markets_util.find(market => market.id == market_id).name,
        products: [product]
      })  
    }
}