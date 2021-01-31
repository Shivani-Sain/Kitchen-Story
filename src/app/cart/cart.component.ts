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
  total :number;
  isValid = false;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,productService:ProductServiceService,public cartService :CartService,public router:Router) {
    this.products = cartService.getProduct();
    this.total= cartService.getTotal();
    this.isValid = cartService.getProduct().length>0;
   }
   deleteFromCart(id:any){
    this.total = this.cartService.deleteFromCart(id);
    alert("item deleted successfully");
  }
  ngOnInit(): void {
  }

}
