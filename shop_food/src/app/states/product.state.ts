import { ProductModel } from "../models/product.model";

export interface ProductState{
    product:ProductModel[];
    isSuccess:boolean;
    error:string;
    loading:boolean;
}