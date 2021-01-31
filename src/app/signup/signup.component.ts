import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheService } from '../authe.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,public authenticate:AutheService,private router :Router) { 
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.authenticate.SignUp(data);
    this.router.navigate(["/app-login"]);
  }
}
