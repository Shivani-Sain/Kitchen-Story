import { Component, OnInit } from '@angular/core';
//import * as productData from '../../assets/product.json';
import { Product } from '../product';
import { Routes } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // products : Product[]= productData;
 //products:any = (productData as any).default;
 product : Product[]=[];
 prod:any;
constructor(public productService:ProductServiceService,public cart:CartService) { }
  ngOnInit(): void {
  }
products=this.productService.getProduct();
isValid = this.productService.productsCountCheck();
addToCart(id: any){
  this.prod = this.productService.getSingleProduct(id);
  this.cart.addProduct(this.prod);
  alert("Item has been added to cart");
}
}
