import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutheService } from './authe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data : any;
  constructor(private authService:AutheService,private router :Router,private formBuilder: FormBuilder,public cart:CartService){
  }
  canActivate():boolean{
    this.data = localStorage.getItem("data");
    alert("local data"+this.data.email);
    alert("local pass"+this.data.password);
    if(this.authService.loggingIn(localStorage.getItem("data")) && !this.authService.fromSeatch(this.cart)){
      alert("1");
      return true;
    }else if(this.authService.loggingIn(localStorage.getItem("data")) && this.authService.fromSeatch(this.cart)){
      alert("2");
      this.router.navigate(["/app-home"]);
      return false;
    }
  else{
    alert("3");
      this.router.navigate(["/app-login"]);
      return false;
    }
  }
}
