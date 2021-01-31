import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitchen-Story';
  constructor(private router:Router){
  }
  buttonClick(data:string){
    this.router.navigate(['app-search',data]);
  }
}
