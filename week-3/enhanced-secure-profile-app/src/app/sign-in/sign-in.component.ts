/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main sign-in component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
   //initiates is logged in with false boolean
  isLoggedIn = false;
   //defines router constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
   //method used in html form to change isLoggedIn to true upon a click event
  signIn() {
     this.isLoggedIn = true;

     this.router.navigate(["/home"], {queryParams:{isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }



}
