import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  id: any;
  products:any;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,public productService:ProductServiceService) {
    this.id = this.route.snapshot.params['id'];
    alert(this.id);
    this.products=this.productService.getSingleProduct(this.id); 

//  onSubmit(value: any) {
  //  alert(value);
   // console.log(value);
    //this.productService.updateProduct(value);

    //}
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.products = this.productService.getSingleProduct(this.id);
        this.editForm.setValue(this.products);
    }
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.productService.updateProduct(this.editForm.value);
  }

 
}
