/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Date: 14 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: all css styling for the sign-in guard component
 */


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const sessionUser = this.cookieService.get("session_user");

    if (sessionUser){
       return true;
    } else {
        this.router.navigate(["/session/sign-in"]);
        return false;
    }
  }

}

