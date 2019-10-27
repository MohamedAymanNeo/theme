import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  aboutBoxs = [
    {
      imgSrc: '../../../assets/images/about/about5.jpg',
      catType: 'Cat',
      catName: 'LollyBob'
    },
    {
      imgSrc: '../../../assets/images/about/about4.jpg',
      catType: 'Cat',
      catName: 'LollyBob'
    },
    {
      imgSrc: '../../../assets/images/about/about4.jpg',
      catType: 'Cat',
      catName: 'LollyBob'
    },
    {
      imgSrc: '../../../assets/images/about/about5.jpg',
      catType: 'Cat',
      catName: 'LollyBob'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
