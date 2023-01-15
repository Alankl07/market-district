import { Component, OnInit } from '@angular/core';

interface market{
  name: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  markets: market[] = []
  market_image_default = '../../../assets/market-default.jpg'

  constructor() { }

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
    ]
  }

}
