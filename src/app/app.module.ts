import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';




@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    AddQuoteComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
