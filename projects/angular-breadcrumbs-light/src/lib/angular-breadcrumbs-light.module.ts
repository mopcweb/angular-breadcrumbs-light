/* ################################################################### */
/*
/*  Core lib module
/*
/* ################################################################### */

/* tslint:disable */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BreadcrumbsComponent]
})
export class AngularBreadcrumbsLightModule { }
