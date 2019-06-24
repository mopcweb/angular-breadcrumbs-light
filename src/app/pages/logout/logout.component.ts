/* ################################################################### */
/*
/*  NotFound page component
/*
/* ################################################################### */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Env
import { environment } from '../../../environments/environment';

// =====> Routes
import { login } from '../../utils/routes';

// =====> Component config
@Component({
  selector: 'app-logout',
  styleUrls: ['./logout.component.sass'],
  templateUrl: './logout.component.html'
})

/* ------------------------------------------------------------------- */
/*                             Component
/* ------------------------------------------------------------------- */

export class LogoutComponent implements OnInit {

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private router: Router
  ) { }

  /* ------------------------------------------------------------------- */
  /*                            Lifecycle
  /* ------------------------------------------------------------------- */

  public ngOnInit() {
    // If prod -> reload page for initiate AWS login route on server
    if (environment.production)
      this.refreshPage();
  }

  /* ------------------------------------------------------------------- */
  /*                          Refresh page
  /* ------------------------------------------------------------------- */

  public refreshPage = () =>
    window.location.reload()

  /* ------------------------------------------------------------------- */
  /*                          Go to login
  /* ------------------------------------------------------------------- */

  public login = () =>
    this.router.navigate([login])

}
