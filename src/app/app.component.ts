import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { markets_util } from './ultil/markets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wab-market-district';
  logo_ditrict_market = './assets/logo_ditrict_market.png'

  market: any = null
  constructor(
    private router: Router
  ){}
  
  changeStatusBar(){
    const url_array = this.router.url.split("/")
    if(url_array.includes("products-market")){
      const marketFind = markets_util.find(market => market.id == url_array[2])
      if(!marketFind){
        Swal.fire("Opss..", "Mercado não encontrado.", "warning")
        return
      }
      this.market = marketFind
      return
    }

    this.market = {
      image: this.logo_ditrict_market,
      name: "Market Distric"
    }
  }
}
