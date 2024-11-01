import { Component, Input, } from '@angular/core';
import { Mensaje } from '../../Interfaces/mensaje';
import { ChatsService } from '../../Services/chats.service';
import { ContactosService } from '../../Services/contactos.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  flag = true;
  constructor(public chat: ChatsService, public contacto: ContactosService){
  
  }
  @Input() msj: Mensaje = {
      hora: "",
      fecha: "",
      estatus: false,
      texto: "",
      id_mensaje: 1,
      id_usuario: 233382
    }
    enviarMensaje(){
      this.chat.addMensaje(this.msj)
      this.msj.texto=''
    }
}
