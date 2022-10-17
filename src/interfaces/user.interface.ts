import { Roles } from '../enums/roles.enum';

export interface User {
    id?: string;
    name: string;
    surname: string;
    email: string;
    date_of_birth: Date;
    role: Roles;
    adress: UserAddress;
}

export interface UserAddress {
    country: string;
    city: string;
    street: string;
    house_number: number;
    flat_number?: number;
}