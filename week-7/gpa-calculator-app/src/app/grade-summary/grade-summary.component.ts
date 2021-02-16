/**
 * Title: grade.component.spec.ts
 * Author: Professor Krasso
 * Date: 8 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: Testing for grade component
**/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
  //allows variables to be bound to child class variables
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
