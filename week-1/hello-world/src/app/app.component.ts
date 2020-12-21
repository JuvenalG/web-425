/*
============================================
; Title:  Assignment 1.3
; Author: Richard Krasso
; Date:   December 20 2020
; Modified By: Juvenal Gonzalez
; Description: Component Specifications
;===========================================
*/

import { Component } from '@angular/core';
//specify styles and Template
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Juvenal Gonzalez's world!" //to be used in html with double curly brackets
}
