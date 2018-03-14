import { DataModel } from "@app/core/model/datamodel";

export class User extends DataModel {
    constructor( 
    public id: number,
    public userName:string,
    public fullName:string,
    public email:string,
    public cellPhone:string,
    public dateBrith:Date,
    public password:string,
    public active:boolean,
    public insertUser:User,
    public insertDate:Date,
    public updateUser:User,
    public updateDate:Date){
        super(id)
    }
}