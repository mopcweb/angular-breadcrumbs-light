/* ################################################################### */
/*
/*  Breadcrumbs component
/*
/* ################################################################### */

import { Component, OnInit, DoCheck, Input } from '@angular/core';

/* ------------------------------------------------------------------- */
/*                              Config
/* ------------------------------------------------------------------- */

// =====> Interfaces
import {
  AngularBreadcrumbsProps, IAngularRoute, ICustomClasses
} from '../../interfaces/index';

// =====> Services
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

/* tslint:disable */

// =====> Component config
@Component({
  selector: 'angular-breadcrumbs-light',
  styleUrls: ['./breadcrumbs.component.sass'],
  templateUrl: './breadcrumbs.component.html'
})

/* tslint:enable */

/* ------------------------------------------------------------------- */
/*                            Component
/* ------------------------------------------------------------------- */

export class BreadcrumbsComponent implements OnInit, DoCheck, AngularBreadcrumbsProps {

  /* ------------------------------------------------------------------- */
  /*                              Vars
  /* ------------------------------------------------------------------- */

  // =====> Private vars
  private location: string;

  // =====> Public vars
  public crumbs: any[] = [];

  // =====> Custom classes
  public rootCustomClass: string;
  public listCustomClass: string;
  public linkCustomClass: string;
  public currentLinkCustomClass: string;
  public iconCustomClass: string;
  public titleCustomClass: string;
  public separatorCustomClass: string;

  // =====> Input vars
  @Input() public routes: IAngularRoute[];
  @Input() public base: string;
  @Input() public separator?: string;
  @Input() public separatorClass?: string;
  @Input() public icons: boolean | string = true;
  @Input() public titles: boolean | string = true;
  @Input() public noTitlesOnMobile: boolean | string = false;
  @Input() public notFoundTitle?: string;
  @Input() public notFoundIcon?: string;
  @Input() public notFoundIconClass?: string;
  @Input() public customClasses?: ICustomClasses;

  /* ------------------------------------------------------------------- */
  /*                             Constructor
  /* ------------------------------------------------------------------- */

  public constructor(
    private breadcrumbs: BreadcrumbsService
  ) { }

  /* ------------------------------------------------------------------- */
  /*                               OnInit
  /* ------------------------------------------------------------------- */

  public ngOnInit() {
    // Define boolean vars
    this.defineBoolean();

    // Get first crumbs
    this.getBreadcrumbs();

    // Get custom classes
    this.getCustomClasses();
  }

  /* ------------------------------------------------------------------- */
  /*                              DoCheck
  /* ------------------------------------------------------------------- */

  public ngDoCheck() {
    if (this.location !== window.location.pathname)
      this.getBreadcrumbs();
  }

  /* ------------------------------------------------------------------- */
  /*                          Get breadcrumbs
  /* ------------------------------------------------------------------- */

  private getBreadcrumbs() {
    // Get current location
    this.location = window.location.pathname;

    // Destructure this
    const {
      routes, location, base, notFoundTitle, notFoundIcon, notFoundIconClass
    } = this;

    // Get crumbs for this location
    this.crumbs =
      this.breadcrumbs.getBreadcrumbs(
        routes, location, base, notFoundTitle, notFoundIcon,
        notFoundIconClass
      );
  }

  /* ------------------------------------------------------------------- */
  /*                         Define boolean vars
  /* ------------------------------------------------------------------- */

  private defineBoolean() {
    this.icons =
      this.icons === 'false' || this.icons === false
        ? false
        : true;

    this.titles =
      this.titles === 'false' || this.titles === false
        ? false
        : true;

    this.noTitlesOnMobile =
      this.noTitlesOnMobile === 'false' || this.noTitlesOnMobile === false
        ? false
        : true;
  }

  /* ------------------------------------------------------------------- */
  /*                         Get custom classes
  /* ------------------------------------------------------------------- */

  private getCustomClasses(): void {
    // Destructure this
    const { customClasses } = this;

    // Specify if provided
    if (customClasses && customClasses.root)
      this.rootCustomClass = customClasses.root;
    if (customClasses && customClasses.list)
      this.listCustomClass = customClasses.list;
    if (customClasses && customClasses.link)
      this.linkCustomClass = customClasses.link;
    if (customClasses && customClasses.currentLink)
      this.currentLinkCustomClass = customClasses.currentLink;
    if (customClasses && customClasses.icon)
      this.iconCustomClass = customClasses.icon;
    if (customClasses && customClasses.title)
      this.titleCustomClass = customClasses.title;
    if (customClasses && customClasses.separator)
      this.separatorCustomClass = customClasses.separator;
  }

}
