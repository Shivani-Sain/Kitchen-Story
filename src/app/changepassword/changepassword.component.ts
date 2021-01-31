import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheService } from '../authe.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  email :string="";
  password:string="";
  confirmpassword:string="";
  bool = false;
  constructor(private route: ActivatedRoute,public router:Router,public auth:AutheService) { }

  ngOnInit(): void {
  }
  submit(){
    this.bool = this.auth.adminPasswordChange(this.email,this.password,this.confirmpassword);
    this.router.navigate(['/app-admin']);
  }
}
