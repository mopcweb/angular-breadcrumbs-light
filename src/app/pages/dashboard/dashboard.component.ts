/* ################################################################### */
/*
/*  Root Dashboard component
/*
/* ################################################################### */

import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> routes
import routes, { profile } from '../../utils/routes';

// =====> Services
import { UserService } from '../../services';

// =====> Component config
@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.sass'],
  templateUrl: './dashboard.component.html'
})

/* ------------------------------------------------------------------- */
/*                            Component
/* ------------------------------------------------------------------- */

export class DashboardComponent implements OnInit, DoCheck {

  /* ------------------------------------------------------------------- */
  /*                              Vars
  /* ------------------------------------------------------------------- */

  public routes = routes;
  public profile = profile;
  public username: string;

  @ViewChild('drawer') public drawer: any;

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    public user: UserService
  ) { }

  /* ------------------------------------------------------------------- */
  /*                            Lifecycle
  /* ------------------------------------------------------------------- */

  public ngOnInit() {
    // Get user username
    this.username = this.user.get.username;
  }

  /* ------------------------------------------------------------------- */
  /*                      Check if user logged in
  /* ------------------------------------------------------------------- */

  ngDoCheck() {
    // Log out
    if (!this.user.get)
      this.user.logOut();
  }

  /* ------------------------------------------------------------------- */
  /*              Close Nav on click out of Nav or on NavLink
  /* ------------------------------------------------------------------- */

  toggle(e: any) {
    if (
      (!e.target.closest('.Nav') || e.target.closest('.Nav-Link')) && !e.target.closest('.Openner')
    )
      this.drawer.close();
  }
}
