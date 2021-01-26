/**
 * Title: composer-details.component.ts
 * Author: Professor Krasso
 * Date: 11 January 2021
 * Modified By: Juvenal Gonzalez
 * Description: typescript file that imports route guard
 */


import { Component, OnInit } from '@angular/core';
import { IComposer } from "..//composer.interface";
import { ComposerService } from "../composer.service"; //previosly composer class
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})  //exports the class using OnInIT to hook the lifecyle
export class ComposerDetailsComponent implements OnInit {
   //sets datatypes for composerDetails
  composerID: number;
  composer: IComposer;                          //private added for injectability
  constructor(private route: ActivatedRoute, private composerService: ComposerService){ //implements route guard
    this.composerID = parseInt(this.route.snapshot.paramMap.get("composerID"), 10);

    if(this.composerID) { //outputs composerID for each composer  ;this.composerService instead of new
      this.composer = this.composerService.getComposer(this.composerID);
    }
  }



  ngOnInit(): void {
  }

}
