/**
 * Title: books.service.spec.ts
 * Author: Professor Krasso
 * Date: 1 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: Testing for books services
 */

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
