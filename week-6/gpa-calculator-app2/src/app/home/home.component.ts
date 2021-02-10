/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Date: 81 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for home with import class export
 */


import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //generates a variable with the ITranscript object
  transcriptEntry: ITranscript;
  //array to be iterated to display grades
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  //Array of Itranscript objects
  transcriptEntries: Array<ITranscript> = [];
  //GPA TOTAL Variable
  gpaTotal: number = 0;;
  constructor() { //ensures that the component is generated with a an ITranscript Object
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  saveEntry() { //pushes transcript entry into transcriptentries array
    this.transcriptEntries.push(this.transcriptEntry);
     //sets local scope of variable back to an empty value
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpa: number = 0;
    //For loop iterates over all transcript entries and uses switch case to apply GPA
    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('its an a')
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;

  }
   //Clears GPA by making transcriptENtries array empty and giving a zero value to GPATotal
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
