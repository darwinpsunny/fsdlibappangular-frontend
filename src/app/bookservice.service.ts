import { Injectable } from '@angular/core';

import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
id
  constructor(private http:HttpClient) { }
  getbooks(){
    console.log("called")
    return this.http.get('https://fsdlibappangularbackend.herokuapp.com/books')
  }
  getauthors(){
    
    return this.http.get('https://fsdlibappangularbackend.herokuapp.com/authors')
  }
  setid(id)
  { 
    localStorage.setItem('id', id);
  }
  getbook(){
    this.id=localStorage.getItem('id')
    return this.http.get("https://fsdlibappangularbackend.herokuapp.com/books/"+this.id);
  }
  getauthor(){
  
  
   this. id=localStorage.getItem('id')
    return this.http.get("https://fsdlibappangularbackend.herokuapp.com/authors/"+this.id);

  }
  addauthor(fd:FormData)
  { 
    return this.http.post("https://fsdlibappangularbackend.herokuapp.com/addauthors/add",fd).subscribe();
  }
  async updateauthor(fd:FormData){
    return  await this.http.post("https://fsdlibappangularbackend.herokuapp.com/updateauthors/update",fd)
    .subscribe()

  }
  async updatebook(fd:FormData){
    return  await this.http.post("https://fsdlibappangularbackend.herokuapp.com/updatebooks/update",fd)
    .subscribe()

  }
  deleteauthor(_id){
    return this.http.post("https://fsdlibappangularbackend.herokuapp.com/deleteauthors/delete",{"id":_id}).subscribe();
  }
  addbook(fd:FormData)
  {
    return this.http.post("https://fsdlibappangularbackend.herokuapp.com/admin/add",fd).subscribe();
  }
  deletebook(_id){
    return this.http.post("https://fsdlibappangularbackend.herokuapp.com/deletebooks/delete",{"id":_id}).subscribe();
  }
}
