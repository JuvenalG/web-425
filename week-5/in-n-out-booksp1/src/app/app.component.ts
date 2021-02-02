/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 1 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: components are exported here
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor(){ // to be passed to app.component.html
      this.assignment= "Exercise 5.3 - Navigation and Layout"
  }
  title = 'in-n-out-booksp1';
}
