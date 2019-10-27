import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sliderImages = [
    {src: '../../../assets/images/header/slider/slide1.jpg'},
    {src: '../../../assets/images/header/slider/slide2.jpg'},
    {src: '../../../assets/images/header/slider/slide3.jpg'},
    {src: '../../../assets/images/header/slider/slide4.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
