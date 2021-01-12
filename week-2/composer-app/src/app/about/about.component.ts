/**
 * Title: about.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for about with import class export
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
// class used to hook into component lifecycle
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
