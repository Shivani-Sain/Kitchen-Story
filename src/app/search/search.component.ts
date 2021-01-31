import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Observable, Subject } from 'rxjs';
import { ProductServiceService } from '../product-service.service';
import {  debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchTerm : string = "";
  products : Product[]=[];
  prod:any;
  constructor(private route: ActivatedRoute,private productService: ProductServiceService,public router:Router,public cart:CartService) { 
    this.products = this.productService.getProduct();
  }
  addToCart(id: any){
    this.prod = this.productService.getSingleProduct(id);

    console.log(this.products);
    this.cart.addProduct(this.prod);
    alert("Item has been added to cart");
    
  }
  ngOnInit(): void {
  }

}
