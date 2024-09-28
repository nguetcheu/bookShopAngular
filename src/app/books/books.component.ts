import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  card: Book[] = [];

  isShowing: boolean = true;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBook();
  }

  addToCart(newBook: Book) {
    console.log(newBook);
  }
}
