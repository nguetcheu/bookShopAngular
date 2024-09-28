import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  constructor() {}

  addBook(book: Book) {
    this.cart.push(book);
    console.log(book);
  }

  getCart(): Book[] {
    return this.cart;
  }
}
