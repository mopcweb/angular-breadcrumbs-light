/* ################################################################### */
/*
/*  Interfaces
/*
/* ################################################################### */

/* ------------------------------------------------------------------- */
/*                            Breadcrumb
/* ------------------------------------------------------------------- */

export interface IAngularBreadcrumb {
  link: string;
  title?: string;
  icon?: any;
  iconClass?: string;
}

/* ------------------------------------------------------------------- */
/*                              Route
/* ------------------------------------------------------------------- */

export interface IAngularRoute {
  link: string;
  title?: string;
  suffix?: string;
  icon?: any;
  iconClass?: string;
  children?: IAngularRoute[];
}

/* ------------------------------------------------------------------- */
/*                    Breadcrumbs custom classes
/* ------------------------------------------------------------------- */

export interface ICustomClasses {
  root?: string;
  list?: string;
  link?: string;
  currentLink?: string;
  icon?: string;
  title?: string;
  separator?: string;
}

/* ------------------------------------------------------------------- */
/*                    Breadcrumbs component Props
/* ------------------------------------------------------------------- */

export interface AngularBreadcrumbsProps {
  routes: IAngularRoute[];
  separator?: any;
  separatorClass?: string;
  icons?: boolean | string;
  titles?: boolean | string;
  noTitlesOnMobile?: boolean | string;
  notFoundTitle?: string;
  notFoundIcon?: any;
  notFoundIconClass?: string;
  customClasses?: ICustomClasses;
}
