import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'libapp';
  activeornot="active";
  loggedin(){
    return !!localStorage.getItem('token')
  }
  clearLocalStorage(event){
    
    localStorage.clear();
    this.router.navigate([""]);
}
  nav=[{link:'/books',name:'books'} ,{link:'/authors',name:'authors'}];
  nav2=[{link:'/signup',name:'signup'},{link:'/login',name:'login'}]
  public isMenuCollapsed = true;
  
}
