import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthGuard}from './auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [{path:"",component:WelcomeComponent},{path:"login",component:LoginComponent},{path:"signup",component:SignupComponent},
{path:"books",canActivate:[AuthGuard],component:BooksComponent},{path:"authors",component:AuthorsComponent},{path:"author",component:AuthorComponent},
{path:"book",component:BookComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
