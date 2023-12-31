import { Schema, model, Document, Model } from "mongoose";

export interface UserDocument extends User, Document {}


export interface User {
    name : string;
    dept : string;
}

interface UserModel extends Model<User>{
    myNewStaticFn() : number;
}

const userSchema = new Schema<User,UserModel>({
    name:{
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    }
})

userSchema.static('myNewStaticFn',function myNewStaticFn(){
    return 150;
})

const UserModel = model<User,UserModel>("User",userSchema);
export default UserModel