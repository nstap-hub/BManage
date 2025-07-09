import { IRoles } from "./IRole"
export interface IUsers{
    id_User : number,
    name :string,
    lastaName:string,
    secondLastName: string,
    email:string,
    password_hash:string,
    role:number,
    image:string
}
export type UserUpdatePayload = Partial<Omit<IUsers,'Id_User' | 'Password_hash'>> &{
    password?:string
}