import { Component, Input } from '@angular/core';
import { Contacto } from '../../Interfaces/contacto';

@Component({
  selector: 'app-card-contactos',
  templateUrl: './card-contactos.component.html',
  styleUrl: './card-contactos.component.css'
})
export class CardContactosComponent {

  @Input() contacto?: Contacto = {
    id: 0,
    name : '',
    email : '',
    id_chat: 1
  }
}
