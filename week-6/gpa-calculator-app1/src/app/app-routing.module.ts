/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 1 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: Routing paths passing ROUTES as an array containing route links
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//All components imported here to be routed
import { BaseLayoutComponent } from "./base-layout/base-layout.component";
import { HomeComponent } from "./home/home.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {                                    //!CHILD path inherents PARENT styling
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: "session",
    component: AuthLayoutComponent,
    children: [
    {
        path: "not-found",
        component: NotFoundComponent
    }
  ]
  },
  {
    path: "**",
    redirectTo: "session/not-found"  //invalid URL redirects to not-found
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
