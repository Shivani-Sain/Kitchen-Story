import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutheService } from '../authe.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public login:AutheService,public route:Router) 
  {
    
   }

  ngOnInit(): void {
  }

}
