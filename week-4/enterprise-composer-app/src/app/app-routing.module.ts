/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: Routing paths passing ROUTES as an array containing route links
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {ComposerDetailsComponent } from "./composer-details/composer-details.component";
//Routes defines each path in an array
const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path:"composer-details/:composerID",
    component: ComposerDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({ //links the routes array to the router module then exports
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
