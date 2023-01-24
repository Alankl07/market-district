import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showImageMarket, showImageProduct } from 'src/app/pipes/images/image.pipes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {


  @Input() market: any

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showImage(url: string) {
    return showImageMarket(url)
  }

  returnInit() {
    this.router.navigate(["/"])
  }

  cartMarket() {
    this.router.navigate(["/cart-market"])
  }

  login() {
    Swal.fire("MD Informa", "Essa página está em desenvolvimento.", "info")
    this.returnInit()
  }

}
