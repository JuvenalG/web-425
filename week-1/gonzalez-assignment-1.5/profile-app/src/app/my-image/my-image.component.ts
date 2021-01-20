/**
 * Title: my-image.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main my-image component with component locations
 */


import { Component, OnInit } from '@angular/core';
//defines locations of my-image component
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
