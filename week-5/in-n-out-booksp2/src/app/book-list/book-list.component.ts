/**
 * Title: book-list.component.ts
 * Author: Professor Krasso
 * Date: 1 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: book-list main component
 */


import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;//mapped to book object

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }
  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
