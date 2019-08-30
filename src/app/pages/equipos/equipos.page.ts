import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  constructor() { }

  ngOnInit() {
    this.segment.value = 'nuevo';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
