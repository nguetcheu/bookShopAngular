import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/Book';

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
      amount: 70,
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      src: 'https://m.media-amazon.com/images/I/91WFb-PpoNL._SX342_.jpg',
      amount: 21,
    },
    {
      name: 'Art of Computer Programming collection',
      author: 'Donald Knuth ',
      src: 'https://m.media-amazon.com/images/I/719SYGJejmL._SY342_.jpg',
      amount: 261,
    },
    {
      name: 'Introduction to Algorithms, fourth edition',
      author: 'Thomas H. Cormen  ',
      src: 'https://m.media-amazon.com/images/I/61Mw06x2XcL._SY342_.jpg',
      amount: 88,
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
