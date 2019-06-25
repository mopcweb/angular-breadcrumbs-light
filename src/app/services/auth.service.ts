/* ################################################################### */
/*
/*  Service for managing authorization over App. Used as canActivate
/*  in all 'dashboard' routes
/*
/* ################################################################### */

import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Services
import { UserService } from './user.service';

// =====> Config
import { logout } from '../utils/routes';

// =====> Config service
@Injectable({
  providedIn: 'root'
})

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

export class AuthService implements CanActivate {

  /* ------------------------------------------------------------------- */
  /*                      Reactive (this) variables
  /* ------------------------------------------------------------------- */



  /* ------------------------------------------------------------------- */
  /*                   Constructor (for private variables)
  /* ------------------------------------------------------------------- */

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  /* ------------------------------------------------------------------- */
  /*                              Methods
  /* ------------------------------------------------------------------- */

  // =====> Guard Service
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Get loggedUser
    const loggedUser = this.user.get;

    // If there is user logged in -> return true
    if (loggedUser && loggedUser.token && loggedUser.username)
      return true;

    // Else navigate to Login page
    this.router.navigate([logout]);

    // Return false
    return false;
  }

}
