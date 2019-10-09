import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-clubs',
  templateUrl: './info-clubs.page.html',
  styleUrls: ['./info-clubs.page.scss'],
})
export class InfoClubsPage implements OnInit {

  clubs: string[] = 
  [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
  ];

  slideOptClubs = {
    slidesPerView: 1.3,
    freeMode: true,
    spacebetween: -5,
  };

  constructor() { }

  ngOnInit() {
  }

}
