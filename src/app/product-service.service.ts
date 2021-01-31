import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import * as productData from '../assets/product.json';
@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  products:any = (productData as any).default;
  constructor() { }
  getProduct(){
    return this.products;
  }
  addProduct(value:any){
    this.products.push(value);
  }
  getSingleProduct(id:string){
    return this.products.find((x: { id: string; })=>x.id==id);
  }
  updateProduct(value:any){
    let index = this.products.findIndex((x: { name: string; }) => x.name ===value.name);
    this.products[index]=value;
  }
  deleteProduct(id:string){
    let index = this.products.findIndex((x: { id: string; }) => x.id ===id);
    //alert(index);
  //  delete this.products[index];
    this.products.splice(index, 1);
  }
  productsCountCheck(){
    if(this.products.length>0){
      return  true;
    }else{
      return false;
    }
  }
}
