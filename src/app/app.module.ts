import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule,HTTP_INTERCEPTORS }  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BookserviceService } from './bookservice.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthorsComponent } from './authors/authors.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    SignupComponent,
    WelcomeComponent,
    AuthorsComponent,
    AuthorComponent,
    BookComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    
    
   

  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
