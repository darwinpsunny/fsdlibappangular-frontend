import { Component, OnInit } from '@angular/core';
import{booksModel} from '../books/books.model'
import { BookserviceService } from '../bookservice.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book=new booksModel("","","","","","");
  constructor(private bookservice:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    this.bookservice.getbook().subscribe((data)=>{
      
    this.book=JSON.parse(JSON.stringify(data));
 })
  }

}
