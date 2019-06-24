/* ################################################################### */
/*
/*  Home page component
/*
/* ################################################################### */

import { Component, OnInit } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Component config
@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.sass'],
  templateUrl: './home.component.html'
})

/* ------------------------------------------------------------------- */
/*                              Component
/* ------------------------------------------------------------------- */

export class HomeComponent implements OnInit {

  public config: any;

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor() { }

  /* ------------------------------------------------------------------- */
  /*                            Lifecycle
  /* ------------------------------------------------------------------- */

  ngOnInit() {
    this.config =
`
const routes: IAngularRoute[] = [
  { link: home, title: 'Home', icon: '✅', children: [
    {
      link: profile,
      title: 'Profile',
      icon: 'person',
      iconClass: 'material-icons' },
  ] },
  {
    link: clients,
    title: 'Clients',
    icon: 'people',
    iconClass: 'material-icons',
    children: [
      {
        link: clients + '/settings', title: 'Clients Settings',
        icon: 'settings', iconClass: 'material-icons'
      },
      {
        link: clients + '/:id', title: 'Client - ', suffix: ', welcome!',
        icon: 'person_pin_circle', iconClass: 'material-icons'
      },
  ] },
  { link: settings, title: 'Settings', iconClass: 'fa fa-check' },
];\
    `;
  }

}
