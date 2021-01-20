/**
 * Title: homecomponent.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: exports HomeComponent class with isLoggedIn boolean used to route from a html form
 */

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Boolean;
   //passes true isLoggedIn to route guard
  constructor(private route: ActivatedRoute) {
     this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get("isLoggedIn"));
  }

  ngOnInit(): void {
  }

}
