/* ################################################################### */
/*
/*  Core app module
/*
/* ################################################################### */

/* tslint:disable */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                         Cookies service
/* ------------------------------------------------------------------- */

import { CookieService } from 'ngx-cookie-service';
import { AngularBreadcrumbsLightModule } from 'angular-breadcrumbs-light';

/* ------------------------------------------------------------------- */
/*                           Router & App
/* ------------------------------------------------------------------- */

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* ------------------------------------------------------------------- */
/*                             Material
/* ------------------------------------------------------------------- */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSnackBarModule, MatProgressSpinnerModule, MatFormFieldModule,
  MatInputModule, MatIconModule, MatButtonModule, MatDividerModule,
  MatSidenavModule, MatRippleModule, MatToolbarModule, MatCardModule,
  MatMenuModule
} from '@angular/material';

/* ------------------------------------------------------------------- */
/*                            Components
/* ------------------------------------------------------------------- */

// import { BreadcrumbsComponent } from './components';

/* ------------------------------------------------------------------- */
/*                              Pages
/* ------------------------------------------------------------------- */

import {
  ClientComponent, ClientsComponent, DashboardComponent, HomeComponent,
  LoginComponent, LogoutComponent, NotFoundComponent, ProfileComponent,
  SettingsComponent
} from './pages';

/* ------------------------------------------------------------------- */
/*                              Services
/* ------------------------------------------------------------------- */

import { AuthService, UserService, AlertService } from './services';

/* ------------------------------------------------------------------- */
/*                         Config AppModul
/* ------------------------------------------------------------------- */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    // BreadcrumbsComponent,
    NotFoundComponent,
    SettingsComponent,
    LogoutComponent,
    ClientsComponent,
    ClientComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularBreadcrumbsLightModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatRippleModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [AuthService, UserService, CookieService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
