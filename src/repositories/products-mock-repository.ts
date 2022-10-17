import { Product } from '../interfaces/product.interface';
import { ProductsRepository } from './products-repository';
import shortid from 'shortid';

export class ProductsMockRepository implements ProductsRepository {
    private products: Array<Product> = [];
    
    getAllItems(): Array<Product> {
        return this.products;
    }

    getItemById(id: string): Product {
       return this.products.find(i => i.id = id);
    }

    findProductByName(name: string): Product {
        return this.products.find(i => i.name === name);
    }

    deleteItem(id: string): boolean {
       this.products = this.products.filter(i => i.id !== id);
       return true;
    }

    addItem(item: Product): Product {
        item.id = shortid.generate();
        item.createdAt = new Date();
        item.updatedAt = new Date();
        this.products.push(item);
        return item;
    }
 
    updateItem(id: string, item: Product): Product {
        this.products = this.products.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                    createdAt: i.createdAt,
                    updatedAt: new Date()
                };
            }
 
            return i;
        });
 
        return this.getItemById(id);
    }

    validateBeforeSave(item: Product): boolean {
        if (item && item.name && item.price && item.count && item.tags ){
            return true;
        }
        return false;
    }
    validateBeforeUpdate(id: string, item: Product): boolean {
        if (id && item && item.name && item.price && item.count && item.tags && item.createdAt && item.id){
            return true;
        }
        return false;
    }
    validateBeforeDelete(id: string): boolean {
        if (id){
            return true;
        }
        return false;
    }
}
        