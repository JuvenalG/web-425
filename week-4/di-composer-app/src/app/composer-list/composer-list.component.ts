
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

//exports default class to carry the list


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})  //exports the class using OnInIT to hook the lifecyle
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
   //defines how composer is initialized and passed
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }

}
