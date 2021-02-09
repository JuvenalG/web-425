/**
 * Title: wishlist.component.ts
 * Author: Professor Krasso
 * Date: 8 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: wishlist main component
 */


import { Component, OnInit } from '@angular/core';
import { IWishListItem } from "../wishlist-item.interface";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishListItem> = [];

  constructor() { }

  ngOnInit(): void {
  }
   //pushes IWishListItem onto this.tiems array
  updateItemsHandler(item: IWishListItem) {
      this.items.push(item);
  }

}
