import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { LoginData } from '../Interfaces/Login';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginData:LoginData = {
    nombre:'',
    password:'',
    correo:'',
    id:'',
  }


  constructor(public loginService: LoginService ){
  }

  envioDatos(){
    this.loginService.addData(this.loginData);
    console.log('Datos enviados',this.loginData);
    this.loginData = {
      nombre: '',
      password: '',
      correo: '',
      id: ''
    };
  }





}
