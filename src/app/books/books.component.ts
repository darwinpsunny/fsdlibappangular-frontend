import { Component, OnInit } from '@angular/core';
import{booksModel} from './books.model'
import { BookserviceService } from '../bookservice.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:booksModel[];
  book=new booksModel("","","","","","");
  selectedfile:File=null;
  onfileselect(event){
    this.selectedfile=<File>event.target.files[0];
  }
  constructor( private bookservice:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    this.bookservice.getbooks().subscribe((data)=>{
      
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  async updatebook(id)
  {
    this.book._id=id;
    const fd=new FormData();
    try{
  fd.append('image',this.selectedfile,this.selectedfile.name);}
  catch(err){}

  fd.append("book",JSON.stringify(this.book))
    const currentRoute = this.router.url;
    await this.bookservice.updatebook(fd);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
    await this.ngOnInit()
        
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
  }
  async deletebook(id)
  { 
    const currentRoute = this.router.url;
    await this.bookservice.deletebook(id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
    await this.ngOnInit()
        
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
  }
  bookabout(id){
   
    this.bookservice.setid(id)
  }
 async addbook(){ 
  const fd=new FormData();
  try{
    fd.append('image',this.selectedfile,this.selectedfile.name);}
    catch(err){}
  fd.append("book",JSON.stringify(this.book))
   const currentRoute = this.router.url;
    this.bookservice.addbook(fd)
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
    await this.ngOnInit()
        
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    });}

}
