/**
 * Title: person.class.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: person class in typescript
 */


import {IPerson} from "./person.interface";

class Person implements IPerson{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//outputs myname which is a Person object
let myName = new Person("Juvenal", "Gonzalez");
console.log(`My name is ${myName.firstName} ${myName.lastName}`)