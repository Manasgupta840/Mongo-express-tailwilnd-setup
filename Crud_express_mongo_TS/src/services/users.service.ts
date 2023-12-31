import UserModel, { User } from "../models/users/users";
import {FilterQuery,UpdateQuery,QueryOptions, Model} from "mongoose";

export function createUser(input:User){
    return UserModel.create(input);
}

export function findUser(query: FilterQuery<User>,options: QueryOptions={lean: true}){
    return UserModel.find(query,{},options);
}

export function findAndUpdate(
    query: FilterQuery<User>,
    updata: UpdateQuery<User>,
    options: QueryOptions
){
    return UserModel.findOneAndUpdate(query,updata,options);
}

export function deleteUser(query: FilterQuery<User>){
    return UserModel.deleteOne(query);
}