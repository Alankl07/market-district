import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  imag_ditrict_market = '../../../assets/district_market.jfif'

  constructor() { }

  ngOnInit(): void {
  }

}
