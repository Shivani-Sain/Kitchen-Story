import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id: any;
  products:any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,productService:ProductServiceService,cartService :CartService) {
    this.id = this.route.snapshot.params['id'];
    this.products = productService.getSingleProduct(this.id);

    console.log(this.products);
    cartService.addProduct(this.products);
    this.products = cartService.getProduct();
   }
  ngOnInit(): void {
  }

}
