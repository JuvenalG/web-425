/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: routing ts file that exports AppRoutes with route guard
 */


import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: "",
    component: SignInComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [SignInGuard] // route guard implementation
  }


]
