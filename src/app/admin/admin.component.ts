import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheService } from '../authe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
email :any;
password:any;
data :any;
  constructor(private route: ActivatedRoute,public router:Router,public auth:AutheService) { 
    if(localStorage.getItem("adminemail") != null && localStorage.getItem("adminemail") != ""){
      this.email = localStorage.getItem("adminemail");
    }
    if(localStorage.getItem("adminpassword") != null && localStorage.getItem("adminpassword") != ""){
      this.password = localStorage.getItem("adminpassword");
    }
    if(this.auth.adminLogin(this.email,this.password)){
      this.data= {"email":this.email,"password":this.password};
      localStorage.setItem("adminemail",this.email);
      localStorage.setItem("adminpassword",this.password);
     this.router.navigate(['/app-details']);
   }else{
     this.router.navigate(['app-admin']);
   }
  }

  ngOnInit(): void {
  }
  submit(){
    //localStorage.setItem("data",data);
    if(this.auth.adminLogin(this.email,this.password)){
       this.data= {"email":this.email,"password":this.password};
       localStorage.setItem("adminemail",this.email);
       localStorage.setItem("adminpassword",this.password);
      this.router.navigate(['/app-details']);
    }else{
      alert("Please enter valid credentials");
      this.router.navigate(['app-admin']);
    }
  }
}
