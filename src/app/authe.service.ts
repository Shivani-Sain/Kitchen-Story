import { Injectable } from '@angular/core';
import { User } from './user';
import * as admin from '../assets/admin.json';
import { ProductServiceService } from './product-service.service';
import { CartService } from './cart.service';
import { Jsonp } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AutheService {
  user:User[]=[];
  adminData:any = (admin as any).default; 
  isloggedIn = false;
  constructor() { }
  SignUp(value :any){
    this.user.push(value);
    }
  loggingIn(data:any){
    if(data !== null && data !== undefined && this.user.some((e: { email: string; password: string; }) => e.email == data.email && e.password == data.password)){
      return true;
    }else{
      return false;
    } 
  }
  fromSeatch(cart:CartService){
    if(cart.getTotal()>0){
      return false;
    }else{
      return true;
    }
  }
    adminLogin(email:string,password:string){
      if(this.adminData.some((e: { email: string; password: string; }) => e.email == email && e.password == password)){
        return true;
      }else{
        return false;
      } 
       
    }
    isAdminLogin(email:any,password:any){
      if(this.adminLogin(email,password)){
        return true;
      }else{
        return false;
      }
    }
    adminPasswordChange(email:string,password:string,newpassword:string){
      if(this.adminData.some((e: { email: string; password: string; }) => e.email == email && e.password == password)){
        let index = this.adminData.findIndex((x: { email: string,password:string }) => x.email ===email && x.password == password);
        const data = {"email":email,"password":newpassword};
        this.adminData[index] = data;
        return true;
      }else{
        return false;
      } 
       
    }
  }
 