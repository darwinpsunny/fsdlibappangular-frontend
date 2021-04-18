import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  adduser(user)
  {
    return this.http.post<any>("https://fsdlibappangularbackend.herokuapp.com/signup/signupsubmit",{"user":user});
  }
  loginuser(user)
 {
   return this.http.post<any>("https://fsdlibappangularbackend.herokuapp.com/login",user);
 
 }
 loggedin(){
  return !!localStorage.getItem('token')
}
}
