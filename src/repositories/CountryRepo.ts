
import mongoose from 'mongoose';
import userModel from "../model/userModel.js";

class CountryRepo {
    private model: mongoose.Model<any>;
    constructor(model) {
        this.model = userModel;
    }
    public getAllCountry = () => {
        this.model.find();
    }


}
export default CountryRepo;