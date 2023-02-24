import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../models/product.model";




export const getItems=createAction('[Items] Get All Items');
export const getItemsSuccess=createAction('[Items] Get All Items Success',props<{product:ProductModel[]}>());
export const getItemsFailure=createAction('[Items] Get All Items Failure',props<{error:string}>());