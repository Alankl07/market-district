import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsMarketInterface } from 'src/app/interfaces/products/products.interface';
import { showImageProduct } from 'src/app/pipes/images/image.pipes';
import { addProductInCart } from 'src/app/ultil/markets';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal
  ) { }

  product: ProductsMarketInterface = {
    description: '',
    image: '',
    name: '',
    obsProduct: '',
    price: ''
  }
  market_id: number = 0
  ngOnInit(): void {
  }

  showImageProduct(url: string) {
    return showImageProduct(url)
  }

  total() { 
    return (Number(this.product.price.replace(",", ".")) * Number(this.product.quantity)).toFixed(2).replace(".", ",")
  }

  addInCart(product: any) {
    if (!this.market_id) {
      Swal.fire("Opsss...", "Mercado não encontrado.", "warning")
      return
    }
    addProductInCart(product, this.market_id)
    this.close()
  }

  close() {
    this.ngbActiveModal.close({result: true})
  }

}
