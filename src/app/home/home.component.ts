import { Component, OnInit } from '@angular/core';
//import * as productData from '../../assets/product.json';
import { Product } from '../product';
import { Routes } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // products : Product[]= productData;
 //products:any = (productData as any).default;

constructor(public productService:ProductServiceService) { }
  ngOnInit(): void {
  }
products=this.productService.getProduct();
isValid = this.productService.productsCountCheck();
}
