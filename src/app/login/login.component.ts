import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import{AuthService} from "../auth.service";
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  eColor : string = '';
  pColor: string = '';
  ebool:boolean=false;
  pbool:boolean=false;
  strength="";
  message="";
  user={email:'',
  password:''}
  userverify()
  { this.authservice.loginuser(this.user)
    .subscribe(
      res=>{ 
        localStorage.setItem("token",res.token);
    this._router.navigate(['']);},
    error=>
    {
      this.message="invalid credentials";
    }   );
  
  }
  changeColour(event) {
    let regexp=/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(event.target.value))
    {
        this.eColor=" blue";
        
        this.ebool=true;
        
    }
    else{
      this.eColor="red";
        

      this.ebool=false;
    }
  }
  
  password1validate(event){
    
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(event.target.value)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = " password Very Weak";
            color = "red";
            break;
        case 3:
            strength = "password strength is Medium";
            color = "orange";
            break;
        case 4:
            if(event.target.value.length>=8){
            strength = "Strong password";
            color = "green";}
            else{
            strength = "password strength is Medium minuinum 8 characters required";
            color = "orange";
            }
            break;
    }
    this.pColor=color;
   this.strength=strength;
    // Password1help.innerText=strength;
    // Password1help.style.color=color;
    if(color=="green" )
    {
      this.pbool=true;
    }
    else{
      this.pbool=false;
    }
  }
 



}
