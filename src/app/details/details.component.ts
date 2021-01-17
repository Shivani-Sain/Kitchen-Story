import { Component, OnInit } from '@angular/core';
import * as productData from '../../assets/product.json';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public productService:ProductServiceService) { }
  //products:any = (productData as any).default;
  ngOnInit(): void {
  }
  products=this.productService.getProduct();
}
