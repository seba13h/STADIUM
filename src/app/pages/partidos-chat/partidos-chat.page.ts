import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-partidos-chat',
  templateUrl: './partidos-chat.page.html',
  styleUrls: ['./partidos-chat.page.scss'],
})
export class PartidosChatPage implements OnInit {

  messages = [
    {
      user: 'Roberto',
      createdAt: 1554090856000,
      msg: 'Hola, qué tal?'
    },
    {
      user: 'Max',
      createdAt: 1554090956000,
      msg: 'Hola, a qué hora es el partido?'
    },
    {
      user: 'Roberto',
      createdAt: 1554090856000,
      msg: 'a las 18:30'
    },
  ];

  currentUser = 'Roberto';
  newMsg = '';
  @ViewChild(IonContent, {static: false}) content: any;

  constructor() { }

  sendMessage() {
    this.messages.push({
      user: 'Roberto',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    });

  }

  ngOnInit() {
  }

}
