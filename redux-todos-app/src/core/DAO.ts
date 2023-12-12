export interface DAO<T>{

    findAll():Promise<T[]>
    delete(o:T):Promise<void>
    save(o:T):Promise<T>

}