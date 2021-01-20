/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 19 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main home component
 */


import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"; //imported route guard
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

}
