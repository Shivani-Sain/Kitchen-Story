import { Component, OnInit } from '@angular/core';
import * as writeJsonFile from 'write-json-file';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import * as productData from '../../assets/product.json';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(public productService:ProductServiceService){
    
  }
  products:any = (productData as any).default;
  onSubmit(value: any) {
    this.productService.addProduct(value);
    //console.log(value);
    //this.products.push(value);
    //console.log(this.products);

    }
}
