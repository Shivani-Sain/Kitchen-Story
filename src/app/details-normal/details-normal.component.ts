import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-details-normal',
  templateUrl: './details-normal.component.html',
  styleUrls: ['./details-normal.component.css']
})
export class DetailsNormalComponent implements OnInit {
  id:any;
  products:any=[];
  prod:any
  isValid = false;
  constructor(public productService:ProductServiceService,private route: ActivatedRoute,public cart:CartService) { 
    this.id = this.route.snapshot.params['id'];
    this.products=this.productService.getSingleProduct(this.id);
    if(this.products != null && this.products != undefined){
      this.isValid = true;  
    }
  }
  addToCart(id:string){
    this.prod = this.productService.getSingleProduct(id);
    console.log(this.products);
    this.cart.addProduct(this.prod);
    alert("Item has been added to cart");
  }
  ngOnInit(): void {

  }
  
}
