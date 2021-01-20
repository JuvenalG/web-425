/**
 * Title: my-details.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: defines a Person class used to pass a set of information
 */


import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
// exports class that contains data passed in one object
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
    keywords = [
        "#TypeScript", "#2021", "#CodingWithAngular", "#ngOmaha"
    ]; //constructor defines how the object is to be intialized
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
      this.fullName = fullName;
      this.favoriteFood = favoriteFood;
      this.favoriteColor = favoriteColor;
    }

    toString(){
      console.log("\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n favorite color: ${this.favoriteColor}");
}

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
}) //creates a Person within a class passing that class so that a defined toString method can be used
export class MyDetailsComponent implements OnInit {

   myProfile: Person;

  constructor() {
     this.myProfile = new Person("Juvenal Joseph Gonzalez", "Shrimp Burrito", "Green");
     this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
