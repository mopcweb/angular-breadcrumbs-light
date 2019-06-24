/* ################################################################### */
/*
/*  Client component
/*
/* ################################################################### */

import { Component, OnInit } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Component config
@Component({
  selector: 'app-client',
  styleUrls: ['./client.component.sass'],
  templateUrl: './client.component.html'
})

/* ------------------------------------------------------------------- */
/*                            Component
/* ------------------------------------------------------------------- */

export class ClientComponent implements OnInit {

  public wrong = `${decodeURIComponent(window.location.pathname)}/Some/wrong/route`;

  public constructor() { }

  ngOnInit() {
  }

}
