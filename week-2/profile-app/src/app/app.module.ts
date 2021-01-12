/*
============================================
; Title:  Assignment 1.5
; Author: Richard Krasso
; Date:   December 20 2020
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
//module declaration
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
