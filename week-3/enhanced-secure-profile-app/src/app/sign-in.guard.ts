/**
 * Title: sign-in-guard.ts
 * Author: Professor Krasso
 * Date: 19 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: route guard to be used in routing
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) {


  }
  //navigates to home page if isLoggedIn is true else returns to sign-in page
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = route.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

 }

}
