
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookseatComponent } from './features/bookseat/bookseat.component';
import { FormsModule } from '@angular/forms';
import { SeatsFormComponent } from './components/seats-form/seats-form.component';
import { BookmyshowComponent } from './components/bookmyshow/bookmyshow.component';
import { SeatsListsComponent } from './components/seats-lists/seats-lists.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BookseatComponent,
    SeatsFormComponent,
    BookmyshowComponent,
    SeatsListsComponent,
  
  ],
  imports: [
    BrowserModule, 
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
