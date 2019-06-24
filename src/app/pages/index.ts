/* ################################################################### */
/*
/*  Root file for all components. Imports and exports all
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                            Import all
/* ------------------------------------------------------------------- */

import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export {
  ClientComponent,
  ClientsComponent,
  DashboardComponent,
  HomeComponent,
  LoginComponent,
  LogoutComponent,
  NotFoundComponent,
  ProfileComponent,
  SettingsComponent,
};
