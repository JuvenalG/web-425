/*
============================================
; Title:  Assignment 1.5
; Author: Richard Krasso
; Date:   December 20 2020
; Modified By: Juvenal Gonzalez
; Description: Module declarations
;===========================================
*/
import { Component } from '@angular/core';
//component template and style
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//exports variable to be used in HTML
export class AppComponent {
  assignment: string = "Assignment 1.5 - Components"
}
