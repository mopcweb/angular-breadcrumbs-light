/* ################################################################### */
/*
/*  Clients component
/*
/* ################################################################### */

import { Component, OnInit } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Routes
import { clients } from '../../utils/routes';

// =====> Component config
@Component({
  selector: 'app-clients',
  styleUrls: ['./clients.component.sass'],
  templateUrl: './clients.component.html'
})

/* ------------------------------------------------------------------- */
/*                            Component
/* ------------------------------------------------------------------- */

export class ClientsComponent implements OnInit {

  public client = `${clients}/Some awesome client`;
  public settings = `${clients}/settings`;

  public constructor() { }

  ngOnInit() {
  }

}
