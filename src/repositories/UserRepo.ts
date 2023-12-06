
import mongoose from 'mongoose';
import userModel from "../model/userModel.js";

class UserRepo {
    private model: mongoose.Model<any>;
    constructor(model) {
        this.model = userModel;
    }
    public getAllUsers = () => {
        this.model.find();
    }


}
export default UserRepo;