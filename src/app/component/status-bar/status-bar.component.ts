import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  imag_ditrict_market = '../../../assets/district_market.jfif'

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  returnInit(){
    this.router.navigate(["/"])
  }

  cartMarket(){
    this.router.navigate(["/cart-market"])
  }

}
