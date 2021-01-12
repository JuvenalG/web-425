/**
 * Title: contact.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: Contact component that passes OnInit component
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
}) //hooks lifecycle and instantiates the component class
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
