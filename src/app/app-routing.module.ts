/* ################################################################### */
/*
/*  Core app routing-module
/*
/* ################################################################### */

/* tslint:disable */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* ------------------------------------------------------------------- */
/*                             Pages
/* ------------------------------------------------------------------- */

import {
  ClientComponent, ClientsComponent, DashboardComponent, HomeComponent,
  LoginComponent, LogoutComponent, NotFoundComponent, ProfileComponent,
  SettingsComponent
} from './pages';

/* ------------------------------------------------------------------- */
/*                             Services
/* ------------------------------------------------------------------- */

import { AuthService } from './services';

/* ------------------------------------------------------------------- */
/*                           Router routes
/* ------------------------------------------------------------------- */

// TODO: protect incorrect dynamic routes for unexistant clients

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService],
    children: [
      // ************** HOME PAGE ************** //
      { path: '', component: HomeComponent },

      // ************ PROFILE PAGE ************ //
      { path: 'profile', component: ProfileComponent },

      // *********** SETTING PAGE ************ //
      { path: 'settings', component: SettingsComponent },

      // *********** Clients PAGE ************ //
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/settings', component: SettingsComponent },
      { path: 'clients/:id', component: ClientComponent },

      // *********** NOT FOUND PAGE *********** //
      { path: '**', component: NotFoundComponent },
    ]
  },
  { path: 'logout', component: LogoutComponent },

  // *********** NOT FOUND PAGE *********** //
  { path: '**', component: NotFoundComponent },
];

/* ------------------------------------------------------------------- */
/*                       Config and export module
/* ------------------------------------------------------------------- */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
