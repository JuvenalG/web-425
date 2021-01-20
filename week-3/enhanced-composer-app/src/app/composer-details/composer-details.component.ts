import { Component, OnInit } from '@angular/core';
import { IComposer } from "..//composer.interface";
import { Composer } from"../composer.class";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerID: number;
  composer: IComposer;
  constructor(private route: ActivatedRoute){
    this.composerID = parseInt(this.route.snapshot.paramMap.get("composerID"), 10);
    if(this.composerID) {
      this.composer = new Composer().getComposer(this.composerID);
    }
  }



  ngOnInit(): void {
  }

}
