/* On oublie pas de chopper le Oninit, mais aussi le OnDestroy*/
import { Component, OnInit, OnDestroy } from '@angular/core';
/* Un petit import du socket Service, Un !*/
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  constructor(
    private chatService: SocketService
  ) { }

  ngOnInit() {
    /* Alors dans le on init, on souscrit à un observable, dont on obtient l'instanciation
    via l'appel du service chatService, puis la méthode getMessages.
    Dès qu'il y a un changement dans l'observable on y place le changement dans un tableau contenant
    les messages (avec la méthode push) */
    this.connection = this.chatService.getMessages().subscribe(message => { this.messages.push(message); });
  }
  /*ici on apelle le service d'envoi de message vers le serveur, puis on vide la variable
  message (afin d'accueillir le message suivant de l'utilisateur).*/
  sendMessage(message) {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  /* On se désouscrit de la variable à observer afin d'éviter le problème du
  "memory leak" ou fuite de mémoire.*/
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
