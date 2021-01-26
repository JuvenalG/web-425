import { Injectable } from '@angular/core';
import { IComposer } from "./composer.interface";

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {

  this.composers = [
    {
      composerID: 100, fullName: "Ludwig van Beethoven"  , genre: "Classical"
    },
    {
      composerID: 101, fullName: "Johann Sebastian Bach" , genre: "Classical"
    },
    {
      composerID: 102, fullName: "Wolfgang Amadeus Mozart" , genre: "Classical"
    },
    {
      composerID: 103, fullName: "Johannes Brahms" , genre: "Classical"
    },
    {
      composerID: 104, fullName: "Joseph Haydn" , genre: "Classical"
    }


  ]
 }
  //getter methods used with composer class
  getComposers() {
    return this.composers;
  }

  getComposer(composerID: number){
    for (let composer of this.composers){
        if(composer.composerID === composerID) {
          return composer;
        }
    }
  }
}
