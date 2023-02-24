import { createReducer, on } from "@ngrx/store";
import { ProductState } from "../states/product.state";
import * as ProductAction from '../actions/product.action'

const initialState: ProductState={
    product :[],
    isSuccess: true,
    error:'string',
    loading: false,
}
export const productReducer=createReducer(
    initialState,
    on(ProductAction.getItems,(state)=>({...state,loading:true})),
    on(ProductAction.getItemsSuccess,(state,action)=>({...state,product:action.product,loading:false})),
    on(ProductAction.getItemsFailure,(state,action)=>({...state,loading:false,isSuccess:true}))
)