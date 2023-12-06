import { Model } from "mongoose";
import userModel from "../model/userModel";

class UserRepo{
private model:Model;
constructor(){
    this.model=userModel;
}
public getAllUsers=()=>{
    this.model.find();
}


}
export default UserRepo;