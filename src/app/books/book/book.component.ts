import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../interface/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  /* recevoir un book depuis le parent vers l'enfant  */
  @Input() book: Book = {} as Book;

  /* envoyer un evenement book depuis l'enfant vers le parent  */
 //  @Output() emitBook = new EventEmitter<Book>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.add(this.book);
    // this.emitBook.emit(this.book);
  }
}
