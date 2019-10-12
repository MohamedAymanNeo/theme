import { Component, OnInit, OnChanges } from '@angular/core';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  // Information About The Store
  list = [
    {
      info: '565 Horiza Street - Philadilphia',
      icon: 'fa fa-map-marker'
    },
    {
      info: 'email@youremail.com',
      icon: 'fa fa-home'
    },
    {
      info: '123 977-654',
      icon: 'fa fa-home'
    }
  ];

  socialIcons = [
    {name: 'fa fa-facebook'},
    {name: 'fa fa-twitter'},
    {name: 'fa fa-instagram'},
  ];

  collapse;

  constructor(private serv: ServiceService) {}



  ngOnInit() {
    this.collapse = this.serv.collapse;
    this.serv.changeTopbar().subscribe((d) => {
      this.collapse = d;
    });
  }
}
