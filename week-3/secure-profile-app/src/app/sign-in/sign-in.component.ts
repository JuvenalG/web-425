/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 19 January 2021
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

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //uses sign in to change Boolean isLoggedIn to true initating router navigation to home page
  signIn() {
     this.isLoggedIn = true;

     this.router.navigate(["/home"], {queryParams:{isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }



}
