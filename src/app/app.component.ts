/* ################################################################### */
/*
/*  Root app component
/*
/* ################################################################### */

import { Component, OnInit } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Services
import { UserService, CookiesService } from './services';

// =====> Component config
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.sass'],
  templateUrl: './app.component.html'
})

/* ------------------------------------------------------------------- */
/*                             Component
/* ------------------------------------------------------------------- */

export class AppComponent implements OnInit {

  /* ------------------------------------------------------------------- */
  /*                              Vars
  /* ------------------------------------------------------------------- */

  private loggedUser: any;

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private user: UserService,
    private cookies: CookiesService
  ) { }

  /* ------------------------------------------------------------------- */
  /*                            Lifecycle
  /* ------------------------------------------------------------------- */

  ngOnInit() {
    // Update logged user - get cookies
    this.loggedUser = this.cookies.get;

    // Set user
    if (this.loggedUser.username && this.loggedUser.token)
      this.user.set(this.loggedUser);
  }

}
