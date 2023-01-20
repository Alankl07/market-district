import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Market{
  name: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  markets: Market[] = []
  market_image_default = '../../../assets/market-default.jpg'

  constructor(
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.getMarkets()
  }

  getMarkets(){
    this.markets = [
      {name: 'Mercado 1', image: ''},
      {name: 'Mercado 2', image: ''},
      {name: 'Mercado 3', image: ''},
      {name: 'Mercado 4', image: ''},
      {name: 'Mercado 5', image: ''},
      {name: 'Mercado 6', image: ''},
      {name: 'Mercado 7', image: ''},
      {name: 'Mercado 8', image: ''},
    ]
  }

  enterMarket(market: Market){
    this.routes.navigate(["/products-market"])
  }

}
