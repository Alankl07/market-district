import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginInterface } from 'src/app/interfaces/login/login.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private ngbModal: NgbModal
  ) { }

  dataLogin: LoginInterface = {}

  ngOnInit(): void {
  }

  login() {
    try {
      const validation = this.validation()
      if (validation.length){
        Swal.fire("Atenção!", validation.reduce((a,b) => `${a} <br> ${b}`), "warning")
        return 
      } 
      Swal.fire("Top!", "Login feiro com sucesso", "success")
    } catch (error) {
      console.log(error)
      Swal.fire("Opss...", "Aconteceu algo errado no seu login", "warning")
    }
  }

  validation() {
    const error: string[] = []
    const email = this.dataLogin.email?.trim()
    const password = this.dataLogin.password?.trim()
    if(!this.dataLogin.email || !email?.length) error.push('Informe o email.')
    if(!this.dataLogin.password) error.push('Informe a senha')
    if(password && password?.length < 6 ) error.push('Informe a senha corretament')
    return error
  }

  register() {
    Swal.fire("humm...", "Então você quer se registrar, só um momento.", "info")
    // this.ngbModal.open()
  }

}
