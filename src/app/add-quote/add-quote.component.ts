import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Output() savequote= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addquote(Evt:any){
    Evt.preventDefault();
    const form = Evt.target;
    console.log ("test")
    this.savequote.emit({
     quote:form.quote.value,
     author: form.author.value, 
    })
  }

}
