import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Clean code',
      author: 'Robert C martin',
      src: 'https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg',
      amount: 7,
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      src: 'https://m.media-amazon.com/images/I/91WFb-PpoNL._SX342_.jpg',
      amount: 21,
    },
    {
      name: 'Art of Computer Programming, The, Volumes 1-4B',
      author: 'Donald Knuth ',
      src: 'https://m.media-amazon.com/images/I/719SYGJejmL._SY342_.jpg',
      amount: 261,
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
