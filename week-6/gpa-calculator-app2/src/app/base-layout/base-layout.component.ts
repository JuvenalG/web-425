/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Date: 81 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for base-layout with import class export
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
     this.assignment = "Exercise 6.4 - Input Properties"
  }

  ngOnInit(): void {
  }

}
