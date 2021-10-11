import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() remove = new EventEmitter();
  @Output() upvote= new EventEmitter();
  @Output() downvote = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  Remove(){
    this.remove.emit();
  }
  Upvote(){
    this.upvote.emit();
  }
  Downvote(){
    this.downvote.emit();
  }

}
