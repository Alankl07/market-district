import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  logo_ditrict_market = '../../../assets/logo_ditrict_market.png'

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

  login(){
    window.alert("Oppen login")
    this.returnInit()
  }

}
