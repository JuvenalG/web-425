/**
 * Title: wishlist-create.component.ts
 * Author: Professor Krasso
 * Date: 8 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: wishlist-create main component
 */


import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { title } from 'process';
import { IWishListItem } from "../wishlist-item.interface";

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})

export class WishlistCreateComponent implements OnInit {
  //@output property binds data to parent class
  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {  //casts item as IWishListItem
      this.item = {} as IWishListItem;
   }

  ngOnInit(): void {
  }
   //methods used for wishlist-create component
  addItem() {
    console.log('Inside wishlist-create.component.ts (child) - addItem() function');
      this.addItemEmitter.emit({
          title: this.item.title,
          authors: this.item.authors
      })

      this.item = {} as IWishListItem;
  }

}
