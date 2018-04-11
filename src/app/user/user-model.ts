import { DataModel } from "@app/core/model/datamodel";

export class User extends DataModel {
    constructor( 
    public id: number,
    public userName:string,
    public fullName:string,
    public email:string,
    public cellPhone:string,
    public dateBrith:any,
    public password:string,
    public active:boolean,
    public insertUser:number,
    public insertDate:Date,
    public updateUser:number,
    public updateDate:Date){
        super(id)
    }
}