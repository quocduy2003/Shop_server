import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as ProductAction from '../actions/product.action'
import { ProductModel } from "../models/product.model";
import { ProductService } from "../services/product.service";


@Injectable()
export class ProductEffect{
    constructor(private action$:Actions,private productService:ProductService){}
    getProduct$ = createEffect(
        ()=>this.action$.pipe(
            ofType(ProductAction.getItems),
            switchMap((action)=>{
                return this.productService.get();
            }),
            map((response)=>{
                return ProductAction.getItemsSuccess({product:<Array<ProductModel>>response});
            }),
            catchError((error)=>{
                return of(ProductAction.getItemsFailure({error:error.message}));
            }),
        )
    )
}