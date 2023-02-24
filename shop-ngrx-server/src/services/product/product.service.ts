import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {

    items: Product[]=[
        {
            id: 1,
            item_name: 'Khô gà lá chanh',
            description: 'Đậm vị thịt gà chất lượng cao',
            price: "75.000k",
            img:"https://i.pinimg.com/564x/9e/4d/75/9e4d75f17f6646d2069531801357f9b0.jpg"
        },
        {
            id: 2,
            item_name: 'Heo khô cháy tỏi',
            description: 'Siêu ngon đậm đà đến từng miếng',
            price: "65.000k",
            img:"https://scdn.thitruongsi.com/image/img/product/2021/03/10/936878b0-817b-11eb-867f-2d6b3697a371.jpg"
        },

        {
            id: 3,
            item_name: 'Cơm cháy',
            description: 'Giòn đến từng miếng',
            price: "90.000k",
            img:"https://i.pinimg.com/736x/c8/c9/d0/c8c9d0bdda78f092c4b0dde011566a99.jpg"
        },

        {
            id: 4,
            item_name: 'Khoai tây lắc phô mai',
            description: 'Chắc là giòn',
            price: "55.000k",
            img:"https://i.pinimg.com/564x/9f/2d/ea/9f2dea9067a878d16f405738414fda94.jpg"
        },
    ]
    getAll(){
        return this.items;
    }
    createItem(item:Product){
        this.items.push(item);
        console.log(item);
    }
    getItemById(id:number){
        return this.items.find((item)=>item.id==id);
    }
    updateItem(updateItem:Product){
        const indexItem=this.items.findIndex((item)=> item.id == updateItem.id);
        this.items[indexItem]=updateItem;
        return {message:'Successful'};
    }
    deleteItemById(id:number){
        let index=this.items.findIndex((item)=>item.id==id);
        console.log(index)
        if(index == -1){
            return 'Không tìm thấy';
        }
        this.items.splice(index,1);
    }
}
