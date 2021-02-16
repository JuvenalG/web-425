/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 14 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: main component for sign-in with import class export
 */


import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { CookieService } from "ngx-cookie-service"; //saves logged in status



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

  ngOnInit(): void {   //ensures that proper numerical format is entered
     this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
     })
  }
           //adds form controls and helps with client-side validation
  get form() { return this.signinForm.controls; }

  onSubmit() {  //uses formvalues on studen Id
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);
              //validates with sign in service and output error message if invalid
    if (this.signinService.validate(studentId)) {
        this.cookieService.set("session_user", studentId.toString(),1);
        this.router.navigate(["/"])
    } else {
        this.errorMessage = "Invalid student ID, please try again";
    }
  }

}
