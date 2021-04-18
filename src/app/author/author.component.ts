import { Component, OnInit } from '@angular/core';
import{authorModel} from '../authors/author.model';
import { BookserviceService } from '../bookservice.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author=new authorModel("","","","","","");
  constructor(private bookservice:BookserviceService,private router:Router) { }



  ngOnInit(): void {
    this.bookservice.getauthor().subscribe((data)=>{
      
    this.author=JSON.parse(JSON.stringify(data));
 })
  }

}
