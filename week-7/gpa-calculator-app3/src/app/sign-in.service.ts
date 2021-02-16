/**
 * Title: sign-in.service.ts
 * Author: Professor Krasso
 * Date: 14 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for sign-in service
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
      this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {  //.some returns true when value matches value in the array
      return this.studentIds.some(id => id === studentId);
  }

}
