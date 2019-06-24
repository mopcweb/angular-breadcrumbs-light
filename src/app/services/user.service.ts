/* ################################################################### */
/*
/*  Service for managing logged user over app. Stores in var,
/*  localStorage and sessionStorage
/*
/* ################################################################### */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Config
import { lsUserLoggedIn, logOutTime } from '../utils/config';

// =====> Routes
import { logout } from '../utils/routes';

// =====> Services
import { CookiesService } from './cookies.service';
import { AlertService } from './alert.service';

/* ------------------------------------------------------------------- */
/*                           Service config
/* ------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

export class UserService {

  /* ------------------------------------------------------------------- */
  /*                             Vars
  /* ------------------------------------------------------------------- */

  // =====> User
  private user: any;
  private logOutStatus: boolean;

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private router: Router,
    private cookies: CookiesService,
    private alert: AlertService,
  ) { }

  /* ------------------------------------------------------------------- */
  /*                            Set user
  /* ------------------------------------------------------------------- */

  public set(user?: { [x: string]: any }): void {
    try {
      // Save into var
      this.user = JSON.stringify(user);

      // Save into localStorage & sessionStorage
      window.localStorage.setItem(lsUserLoggedIn, this.user);
      window.sessionStorage.setItem(lsUserLoggedIn, this.user);

      // Parse and return user
      return JSON.parse(this.user);
    } catch (err) {
      // Log
      console.log('[ =====> INVALID CREDENTIALS <===== ]', err);

      // Return
      return;
    }
  }

  /* ------------------------------------------------------------------- */
  /*                            Get user
  /* ------------------------------------------------------------------- */

  public get get(): { [x: string]: any } {
    try {
      // Define storages
      const ls = window.localStorage.getItem(lsUserLoggedIn);
      const ss = window.sessionStorage.getItem(lsUserLoggedIn);

      // If one of them is empty -> another should push
      if (ls && !ss) window.sessionStorage.setItem(lsUserLoggedIn, ls);
      if (!ls && ss) window.localStorage.setItem(lsUserLoggedIn, ss);

      // Parse and return user
      return JSON.parse(this.user || ls || ss);
    } catch (err) {
      // Log
      console.log('[ =====> INVALID CREDENTIALS <===== ]', err);

      // Return
      return;
    }
  }

  /* ------------------------------------------------------------------- */
  /*                           Logout user
  /* ------------------------------------------------------------------- */

  public logOut(manual = false) {
    // If already loggin out -> stop
    if (this.logOutStatus) return;

    // Update logging out status
    this.logOutStatus = true;

    // Reset user
    this.reset();

    // Show alert
    this.alert.warn(
      `${manual ? '' : 'Session expired. '}You will be logged out in ${logOutTime / 1000} seconds`,
      true,
      4900
    );

    // Navigate to login page after 5 seconds
    setTimeout(() => {
      // Update logging out status
      this.logOutStatus = false;

      // Navigate
      this.router.navigate([logout]);
    }, logOutTime);
  }

  /* ------------------------------------------------------------------- */
  /*                           Reset user
  /* ------------------------------------------------------------------- */

  public reset(): void {
    // Reset user var
    this.user = undefined;

    // Remove item from localStorage & sessionStorage
    window.localStorage.removeItem(lsUserLoggedIn);
    window.sessionStorage.removeItem(lsUserLoggedIn);

    // Remove cookies
    this.cookies.rm();
  }

}
