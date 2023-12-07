
import mongoose from 'mongoose';
import countryModel from '../model/countryModel';

class CountryRepo {
    private model: mongoose.Model<any>;
    constructor() {
        this.model = countryModel;
    }
    public getAllCountry = async () => {
        await this.model.find();
    }
    // public addAllCountry=async()=>{
    //     await this.model.
    // }


}
export default CountryRepo;