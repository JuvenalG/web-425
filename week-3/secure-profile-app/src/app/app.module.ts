/*
============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Date:   January 19 2020
; Modified By: Juvenal Gonzalez
; Description: Module declarations
;===========================================
*/
//imports components and other module elements
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { SignInComponent } from './sign-in/sign-in.component';
//module declarations of each component
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    HomeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
