/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 1 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: Routing paths passing ROUTES as an array containing route links
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { AppComponent } from './app.component';

//Route array that links the paths to their components
const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "book-list",
    component: BookListComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about" ,
    component: AboutComponent
  },
  {
    path: "wishlist" ,
    component: WishlistComponent
  },
  { path: "**",
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
