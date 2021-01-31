import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutheService } from '../authe.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error :boolean= false;
  data:any;
  data1:any;
  localData :any;
  constructor(private route: ActivatedRoute,public router:Router,public auth:AutheService,public cart:CartService) { 
    this.localData = localStorage.getItem("data");
    if(this.localData != null && this.auth.loggingIn(JSON.parse(this.localData)) && !this.auth.fromSeatch(this.cart)){
      this.router.navigate(['/app-checkout']);
    }else if(this.auth.loggingIn(JSON.parse(this.localData)) && this.auth.fromSeatch(this.cart)){
      this.router.navigate(['/app-home']);
    }
    else{
      this.router.navigate(['/app-login']);
    }
  }

  ngOnInit(): void {
  }
  onSubmit(data: any){
    if(data != null){
      if(this.auth.loggingIn(data) && !this.auth.fromSeatch(this.cart)){
        this.data1= {"email":data.email,"password":data.password};
        localStorage.setItem("data",JSON.stringify(this.data1));
        this.router.navigate(['/app-checkout']);
      }else if(this.auth.loggingIn(data) && this.auth.fromSeatch(this.cart)){
        this.data1= {"email":data.email,"password":data.password};
        localStorage.setItem("data",JSON.stringify(this.data1));
        this.router.navigate(['/app-home']);
      }
      else{
        localStorage.removeItem("data");
        this.error = true;
        this.router.navigate(['/app-login']);
      }
    }else if(localStorage.getItem("data") != null){
      if(this.localData != null && this.auth.loggingIn(JSON.parse(this.localData)) && !this.auth.fromSeatch(this.cart)){
        this.router.navigate(['/app-checkout']);
      }else if(this.auth.loggingIn(JSON.parse(this.localData)) && this.auth.fromSeatch(this.cart)){
        this.router.navigate(['/app-home']);
      }
      else{
        this.error = true;
        this.router.navigate(['/app-login']);
      }
    }else{
      this.error = true;
      this.router.navigate(['/app-login']);
    }
    
  }
}
