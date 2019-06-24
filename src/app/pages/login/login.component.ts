/* ################################################################### */
/*
/*  Login page component
/*
/* ################################################################### */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Routes
import { home } from '../../utils/routes';

// =====> Services
import { UserService, CookiesService } from '../../services';

// =====> Component config
@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.sass'],
  templateUrl: './login.component.html'
})

/* ------------------------------------------------------------------- */
/*                           Component
/* ------------------------------------------------------------------- */

export class LoginComponent implements OnInit {

  /* ------------------------------------------------------------------- */
  /*                              Vars
  /* ------------------------------------------------------------------- */

  private show = true;
  private login: string;
  private pwd: string;

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private router: Router,
    private user: UserService,
    private cookies: CookiesService
  ) { }

  /* ------------------------------------------------------------------- */
  /*                            Lifecycle
  /* ------------------------------------------------------------------- */

  ngOnInit() { }

  /* ------------------------------------------------------------------- */
  /*                   EVENT HANDLER: Show/hide pwd
  /* ------------------------------------------------------------------- */

  showHide = () =>
    this.show = !this.show

  /* ------------------------------------------------------------------- */
  /*                EVENT HANDLER: Update vars on type
  /* ------------------------------------------------------------------- */

  handleCahnge = (e: any, field: string) =>
    this[field] = e.target.value

  /* ------------------------------------------------------------------- */
  /*                         Send request
  /* ------------------------------------------------------------------- */

  authorize() {
    // Set cookies for testing
    const user = this.cookies.set(this.login, this.pwd);

    // Set user
    if (user.token && user.username)
      this.user.set(user);

    // Navigate to dashboard
    return this.router.navigate([home]);
  }
}




//
