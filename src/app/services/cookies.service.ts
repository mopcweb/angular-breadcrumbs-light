/* ################################################################### */
/*
/*  Service for managing cookies for logged user
/*
/* ################################################################### */

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Config
import {
  usernameCookie, tokenCookie, cookiePath, cookieExpiration
} from '../utils/config';

/* ------------------------------------------------------------------- */
/*                           Service config
/* ------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

export class CookiesService {

  /* ------------------------------------------------------------------- */
  /*                             Vars
  /* ------------------------------------------------------------------- */

  // =====> User
  username: string;
  token: string;

  /* ------------------------------------------------------------------- */
  /*                           Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private cookies: CookieService
  ) { }

  /* ------------------------------------------------------------------- */
  /*                           Set cookies
  /* ------------------------------------------------------------------- */

  public set(username: string, token: string) {
    // Update vars
    this.username = username;
    this.token = token;

    // Set cookies
    this.cookies.set(usernameCookie, username, cookieExpiration, cookiePath);
    this.cookies.set(tokenCookie, token, cookieExpiration, cookiePath);

    // Return
    return { username: this.username, token: this.token };
  }

  /* ------------------------------------------------------------------- */
  /*                           Get cookies
  /* ------------------------------------------------------------------- */

  public get get() {
    // Get cookies and update vars
    this.username = this.cookies.get(usernameCookie);
    this.token = this.cookies.get(tokenCookie);

    // Return
    return { username: this.username, token: this.token };
  }

  /* ------------------------------------------------------------------- */
  /*                           Set cookies
  /* ------------------------------------------------------------------- */

  public rm() {
    // Reset vars
    this.username = this.token = undefined;

    // Delete cookies
    this.cookies.delete(usernameCookie, cookiePath);
    this.cookies.delete(tokenCookie, cookiePath);
  }

}
