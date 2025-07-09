import { ICategory } from "./ICategory";
import { IDepartment } from "./IDepartment";

export interface IProducts{
    id_product:number,
    qrCode:string,
    name:string,
    serial_number:number,
    brand:string,
    model:string,
    image?:string|null,
    category:ICategory,
    departent:IDepartment,
    color:string,
    size:string,
    description:string,
    quantity:number,
    created_At:Date,
    updated_At:Date
}
//Creación de productos (lo que se recibes en el body)
export type ProductCreatePayload = Omit<IProducts, 'id_product' | 'created_at' | 'updated_at'>;

// Para la actualización de productos
export type ProductUpdatePayload = Partial<Omit<IProducts, 'id_product' | 'created_at' | 'updated_at'>>;