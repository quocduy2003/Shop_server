import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductState } from 'src/app/states/product.state';
import * as ProductAction from '../../actions/product.action'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  product$:Observable<ProductState>
  constructor(private productService:ProductService,private productStore:Store<{product:ProductState}>){
    this.product$=this.productStore.select('product');
  }
  ngOnInit(): void {
    this.productStore.dispatch(ProductAction.getItems());
    console.log("yyyyy");
  }

}
