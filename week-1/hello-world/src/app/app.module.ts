/*
============================================
; Title:  Assignment 1.3
; Author: Richard Krasso
; Date:   December 20 2020
; Modified By: Juvenal Gonzalez
; Description: Module declarations
;===========================================
*/
//imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//module decorator using AppComponent as Namespace and bootstrap
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
