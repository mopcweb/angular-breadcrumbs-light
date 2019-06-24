/* ################################################################### */
/*
/*  Breadcrumbs service. Returns array with breadcrumbs
/*
/* ################################################################### */

import { Injectable } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                             Config
/* ------------------------------------------------------------------- */

// =====> Interfaces
import { IAngularBreadcrumb, IAngularRoute } from '../interfaces';

// =====> Helpers
import { HelpersService } from './helpers.service';

// =====> Service config
@Injectable({
  providedIn: 'root'
})

/* ------------------------------------------------------------------- */
/*                              Service
/* ------------------------------------------------------------------- */

export class BreadcrumbsService {

  /* ------------------------------------------------------------------- */
  /*                              Vars
  /* ------------------------------------------------------------------- */



  /* ------------------------------------------------------------------- */
  /*                            Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private helpers: HelpersService
  ) { }

  /* ------------------------------------------------------------------- */
  /*                            Breadcrumbs
  /* ------------------------------------------------------------------- */

  public getBreadcrumbs = (
    routes: IAngularRoute[], fullUrl = window.location.pathname,
    notFoundTitle?: string, notFoundIcon?: string, notFoundIconClass?: string
  ): IAngularBreadcrumb[] => {
    // Get necessary methods
    const { removeParams, findMin, findParam, makeFirstLetterUp } = this.helpers;

    // Var for array to return
    const breadcrumbs: IAngularBreadcrumb[] = [];

    // Remove params
    const croppedUrl: string = removeParams(decodeURIComponent(fullUrl));

    // Root route
    const root = findMin(routes);

    // Array of paths
    const paths: string[] = routes[root.index].link[0] === '/'
      ? fullUrl === '/'
        ? [fullUrl]
        : croppedUrl.split('/')
      : croppedUrl.split('/');

    // Remove similar first routes
    if (paths[0] === paths[1])
      paths.splice(0, 1);

    // Var for changing link
    let link = '';

    // Var for prev route
    let prevRoute: IAngularRoute | undefined;

    // Iterate over paths and breadcrumbs unit
    paths.forEach((item, i, arr) => {
      /**
       *  Update link.
       *  First 2 conditions -> prevent duplicate '/'
       *  Last condition -> define whether to use or no '/' for first route
       *  depending on first
       */
      link =
        link[link.length - 1] === '/' ||
        item[0] === '/' ||
        (routes[root.index].link[0] !== '/' && i === 0)
          ? link + item
          : link + '/' + item;

      // Get appropriate route
      let route: IAngularRoute | undefined = routes.find(item => item.link === link);

      // If there is route found -> save it as prev route
      if (route) prevRoute = route;

      // If no route found -> try to find in its children by link or dynamic param
      if (!route && prevRoute && prevRoute.children)
        route =
          prevRoute.children.find(item => item.link === link) ||
          prevRoute.children.find(item => findParam(item.link));

      // Again: If there is route found -> save it as prev route
      if (route) prevRoute = route;

      // Define breadcrumbs unit title
      let title: string = route
        ? route.title
          ? findParam(route.link)
            ? route.title + makeFirstLetterUp(item)
            : route.title
          : makeFirstLetterUp(item)
        : notFoundTitle
          ? notFoundTitle
          : 'Page Not Found';

      // If route link === '/' || '' and no manually title provided
      if (route && route.link.length <= 1)
        title = 'Root';

      // If suffix provided -> add it at the end of title
      if (route && route.suffix)
        title = title + route.suffix;

      // Decode title
      while (title !== decodeURIComponent(title))
        title = decodeURIComponent(title);

      // Decode link
      while (link !== decodeURIComponent(link))
        link = decodeURIComponent(link);

      // Define breadcrumbs unit icon
      const icon: any = route
        ? route.icon
        : notFoundIcon;

      // Define breadcrumbs unit iconClass
      const iconClass = route ? route.iconClass : notFoundIconClass;

      // Unit to push into breadcrumbs array
      const unit = { link, title, icon, iconClass };

      // If unit.title is not found -> skip if not last and push if last
      if (unit.title === notFoundTitle || unit.title === 'Page Not Found')
        return i !== arr.length - 1 ? false : breadcrumbs.push(unit);

      // Push into array
      breadcrumbs.push(unit);
    });

    // Return
    return breadcrumbs;
  };

}
