import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { markets_util } from 'src/app/ultil/markets';

interface Market{
  id: number,
  name: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Output() testeEmitter: EventEmitter<any> = new EventEmitter()

  markets: Market[] = []
  market_image_default = './assets/market-default.jpg'

  constructor(
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.getMarkets()
    this.testeEmitter.emit({ teste: 'teste'})
  }

  getMarkets(){
    this.markets = markets_util
  }

  enterMarket(market: Market){
    this.routes.navigate(["/products-market/"+market.id])
  }

}
