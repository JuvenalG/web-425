/**
 * Title: my-details.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main my-details component
 */


import { Component, OnInit } from '@angular/core';
//all locations of components
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})  //exports component and implementing the hook mehtod OnInit
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
