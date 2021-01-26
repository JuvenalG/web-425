
/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 01 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: composer-list main component, displays all composers in the class
 */

import { Component, OnInit } from '@angular/core';
import {IComposer} from "../composer.interface";
import { ComposerService } from "../composer.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";  //allows specified time for actions
import { Observable } from "rxjs";

//exports default class to carry the list


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})  //exports the class using OnInIT to hook the lifecyle
export class ComposerListComponent implements OnInit {
 //composr variable now contains observable object
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl("");
   //defines how composer is initialized and passed
   //uses debounceTime with txtSearchControl
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe (val => this.filterComposers(val)); //filterComposer used in seach
  }

  ngOnInit(): void {
  } //filterComposer function passed in constructor
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
