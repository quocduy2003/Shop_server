import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { Product } from 'src/models/product.model';
import { ProductService } from 'src/services/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
    @Get('/all')
    getAll(){
        return this.productService.getAll();
    }
    @Post('/create')
    create(@Body() item:Product){
        return this.productService.createItem(item);
    }
    @Get('/:id')
    getItemById(@Param('id')id:number){
        return this.productService.getItemById(id);
    }
    @Delete('delete/:id')
    delete(@Param('id')id:number){
        return this.productService.deleteItemById(id);
    }

}
