import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheService } from '../authe.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route: ActivatedRoute,public router:Router,private cart:CartService,public authe:AutheService) {
    if(cart.getProduct().length>0 && this.authe.loggingIn(cart.getProduct())){
      cart.clearCart();
      cart.total = 0;
    }
    localStorage.clear();
    alert("You successfully logged out");
    this.router.navigate(['/app-home']);
   }

  ngOnInit(): void {
  }

}
