import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 // item = [];
    item : Product[] = [];
    total:number=0;
    price = 0;
  constructor() { }
  addProduct(product: Product){
    this.item.push(product);
    this.total=this.total+product.price;
    console.log(product.price);
    console.log(this.total);
  }
  getProduct(){
    alert(this.item);
    console.log(this.item);
    return this.item;
  }
  clearCart(){
    this.item = [];
  }
  getTotal(){
    console.log("this is total"+this.total);
    return this.total;
  }
}
