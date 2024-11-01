import { Injectable } from '@angular/core';
import { Contacto } from '../Interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor() { }
  contactos: Contacto[] = [
    {id: 233382, name: 'Miguel Angel', email: 'Miguelangelgtzg@gmail.com', id_chat:1},
   // {id: 233377, name: 'Miguel Molina', email: 'Molina88@gmail.com', id_chat:2},
    //{id: 233371, name: 'Jose de jesus', email: 'JoseDJesusCorona@gmail.com', id_chat:3},
  ]
}
