import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  products:any;
  total :any;
  constructor(public cartService :CartService) { 
    this.products = cartService.getProduct();
    this.total= cartService.getTotal();
    this.cartService.clearCart();

  }

  ngOnInit(): void {
  }

}
