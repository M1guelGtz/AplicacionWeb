import { Component, Input } from '@angular/core';
import { Contacto } from '../../Interfaces/contacto';
import { ContactosService } from '../../Services/contactos.service';
import { isNull } from 'util';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {

  @Input() cont: Contacto = {
    id: 1,
    name:'',
    email: '',
    id_chat: 0
  }
  modal: boolean = false 
  constructor(public contactos: ContactosService ){}
  flagForModal(){
    this.modal = !this.modal
  }
  agregarContacto(){
    this.cont.id = this.contactos.contactos.length + 1
    this.cont.id_chat = this.contactos.contactos.length + 1
    this.contactos.contactos.push(this.cont)
  }
}
