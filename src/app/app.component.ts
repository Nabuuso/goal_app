import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Quotes';
  quotes:Quote[] = [];


  constructor(private ngModal: NgbModal) {
  }

  ngOnInit(): void {
  }
  openAddQuote(m: any) {
   this.ngModal.open(m) 
  }
  addquote(evt:any){
    evt.preventDefault();
    const form = evt.target;
    this.quotes.push
    ({
     quote:form.quote.value,
     author: form.author.value,
     votes:0, date:new Date
    })
  }

  remove(index:number){
    this.quotes.splice(index,1);
    console.log (this.quotes)
  }

  upvote(index:number){
    this.quotes[index].votes++
  }

  downvote(index:number){
    this.quotes[index].votes--
  }
}
