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
    console.log(this.item);
    return this.item;
  }
  clearCart(){
    this.item = [];
    this.total=0;
  }
  getTotal(){
    console.log("this is total"+this.total);
    return this.total;
  }
  deleteFromCart(id:any){
    let index = this.item.findIndex((x: { id: string; }) => x.id ===id);
    this.total = this.getTotal()-this.item[index].price;
    //  delete this.products[index];
    this.item.splice(index, 1);
    return this.total;

  }
}
