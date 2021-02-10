/**
 * Title: gpa.component.ts
 * Author: Professor Krasso
 * Date: 81 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for gpa with import class export
 */


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
 //sets bound variable and defines datatype
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
