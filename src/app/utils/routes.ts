/* ################################################################### */
/*
/*  All app routes
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                            Interfaces
/* ------------------------------------------------------------------- */

import { IAngularRoute } from '../interfaces';
/* ------------------------------------------------------------------- */
/*                          General routes
/* ------------------------------------------------------------------- */

export const login = '/login';
export const logout = '/logout';

export const dashboard = '/dashboard';
export const home = dashboard;
export const profile = home + '/profile';
export const settings = home + '/settings';
export const clients = home + '/clients';

/* ------------------------------------------------------------------- */
/*                          Routes for nav
/* ------------------------------------------------------------------- */

const routes: IAngularRoute[] = [
  { link: home, title: 'Home', icon: '✅', children: [
    {
      link: profile,
      title: 'Profile',
      icon: 'person',
      iconClass: 'material-icons' },
  ] },
  {
    link: clients,
    title: 'Clients',
    icon: 'people',
    iconClass: 'material-icons',
    children: [
      {
        link: clients + '/settings', title: 'Clients Settings',
        icon: 'settings', iconClass: 'material-icons'
      },
      {
        link: clients + '/:id', title: 'Client - ', suffix: ', welcome!',
        icon: 'person_pin_circle', iconClass: 'material-icons'
      },
  ] },
  { link: settings, title: 'Settings', iconClass: 'fa fa-check' },
];

/* ------------------------------------------------------------------- */
/*                          Export routes
/* ------------------------------------------------------------------- */

export default routes;
