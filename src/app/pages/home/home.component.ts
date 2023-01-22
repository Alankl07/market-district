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
      {name: 'Assai Acadadista', image: '../../../assets/acaiatacadao.jfif'},
      {name: 'Atacadão', image: '../../../assets/atacadao.png'},
      {name: 'Big Bompreço', image: '../../../assets/bigbompreco.png'},
      {name: 'G Barbosa', image: '../../../assets/gbarbosa.png'},
      {name: 'Mercantil', image: '../../../assets/mercantil.png'},
      {name: 'Brasil Mercado', image: ''},
      {name: 'Atacadão Junior', image: '../../../assets/atacadao.png'},
      {name: 'G Barbosa Junior ', image: '../../../assets/gbarbosa.png'},
    ]
  }

  enterMarket(market: Market){
    this.routes.navigate(["/products-market"])
  }

}
