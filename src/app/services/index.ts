/* ################################################################### */
/*
/*  Root file for all services. Imports and export all
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                            Import all
/* ------------------------------------------------------------------- */

// =====> Services
import { AlertService } from './alert.service';
import { AuthService } from './auth.service';
import { CookiesService } from './cookies.service';
import { HelpersService } from './helpers.service';
import { UserService } from './user.service';
import { BreadcrumbsService } from './breadcrumbs.service';

/* ------------------------------------------------------------------- */
/*                              Export
/* ------------------------------------------------------------------- */

export {
  AlertService,
  AuthService,
  HelpersService,
  CookiesService,
  UserService,
  BreadcrumbsService
};
