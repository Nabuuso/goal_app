import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Quotes';
  quotes = [];


  constructor(private ngModal: NgbModal) {
  }

  ngOnInit(): void {
  }
  openAddQuote(m: any) {
   this.ngModal.open(m) 
  }
  addquote(Evt:any){
    Evt.preventDefault();
    const form = Evt.target;
    console.log 
    ({
     quote:form.quote.value,
     author: form.author.value, 
    })
  }
}
