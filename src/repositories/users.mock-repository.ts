import shortid from 'shortid';
import { User } from '../interfaces/user.interface';
import { UsersRepository } from './users-repository';

export class UsersMockRepository implements UsersRepository {
    private users: Array<User> = [];

    getAllItems(): Array<User> {
        return this.users;
    }

    getItemById(id: string): User {
       return this.users.find(i => i.id = id);
    }

    findUserByFirstName(name: string): User {
        return this.users.find(i => i.name === name);
    }

    deleteItem(id: string): boolean {
       this.users = this.users.filter(i => i.id !== id);
       return true;
    }

    addItem(item: User): User {
        item.id = shortid.generate();
        this.users.push(item);
        return item;
    }
 
    updateItem(id: string, item: User): User {
        this.users = this.users.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                };
            }
 
            return i;
        });
 
        return this.getItemById(id);
    }

    validateBeforeSave(item: User): boolean {
        if (item && item.name && item.surname && item.email && item.date_of_birth && item.role && item.adress ){
            return true;
        }
        return false;
    }
    validateBeforeUpdate(id: string, item: User): boolean {
        if (id && item && item.name && item.surname && item.email && item.date_of_birth && item.role && item.adress && item.id){
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
