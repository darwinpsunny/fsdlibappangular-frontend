import { Component, OnInit } from '@angular/core';
import{authorModel} from './author.model';
import { BookserviceService } from '../bookservice.service';
import{Router} from '@angular/router';
import{HttpClient}from'@angular/common/http';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:authorModel[];
  author=new authorModel("","","","","","");
  selectedfile:File=null;
  onfileselect(event){
    this.selectedfile=<File>event.target.files[0];
  }
  constructor( private bookservice:BookserviceService,private router:Router,private http:HttpClient ){ }
  ngOnInit(): void {
    this.bookservice.getauthors().subscribe((data)=>{
      
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  // onupload(){
  //   const fd=new FormData();
  //   fd.append('image',this.selectedfile,this.selectedfile.name);

  //   this.http.post("http://localhost:3000/addauthors/add",fd)
  //   .subscribe(res=>{
  //     console.log(res);
  //   })
  // }
  authorabout(id){
    
this.bookservice.setid(id)

  }
  async addauthor()
  { const currentRoute = this.router.url;
    const fd=new FormData();
    try{
      fd.append('image',this.selectedfile,this.selectedfile.name);}
      catch(err)
      {}
    fd.append("author",JSON.stringify(this.author))
   
    
 
    this.bookservice.addauthor(fd)
    
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
    await this.ngOnInit()
        
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
  }







  async updateauthor(_id){

    this.author._id=_id;
    const currentRoute = this.router.url;
    const fd=new FormData();
    try{
      fd.append('image',this.selectedfile,this.selectedfile.name);}
      catch(err)
      {}
    fd.append("author",JSON.stringify(this.author))
    await this.bookservice.updateauthor(fd);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
    await this.ngOnInit()
        
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
  }
  async deleteauthor(_id){
    
    const currentRoute = this.router.url;
    await this.bookservice.deleteauthor(_id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
  }); 
    await this.ngOnInit()
        
         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
  }
 

}
