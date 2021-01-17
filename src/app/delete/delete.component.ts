import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute,public productService:ProductServiceService) {
    this.id = this.route.snapshot.params['id'];
    productService.deleteProduct(this.id);
   }

  ngOnInit(): void {
  }

}
