/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 14 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for sign-in with import class export
 */


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  constructor(private router:Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

  }

  ngOnInit(): void {
     this.signinForm = this.fb.group({
       studentId: ""
     })
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
        this.cookieService.set("session_user", studentId.toString(),1);
        this.router.navigate(["/"])
    } else {
        this.errorMessage = "Invalid student ID, please try again";
    }
  }

}
