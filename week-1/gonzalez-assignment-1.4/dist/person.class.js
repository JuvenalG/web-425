/**
 * Title: person.class.js
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: person class defining person object
 */


"use strict"; // Defines the object
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}()); // Creates Person object and outputs in console.log
var myName = new Person("Juvenal", "Gonzalez");
console.log("My name is " + myName.firstName + " " + myName.lastName);
