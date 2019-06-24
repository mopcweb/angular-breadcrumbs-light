import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [BreadcrumbsComponent]
})
export class AngularBreadcrumbsLightModule { }
