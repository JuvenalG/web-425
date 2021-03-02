
/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 1 February 2021
 * Modified By: Juvenal Gonzalez
 * Description: Interface for book Object
 */
//Defines the interface that applies the datafields and defines datatypes for IBOOK object
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
