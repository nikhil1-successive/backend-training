import mongoose from 'mongoose';
import countryModel from '../model/countryModel';
import ICountry from '../interface/ICountry';

class CountryRepo {
    private model: mongoose.Model<any>;

    constructor() {
        this.model = countryModel;
    }

    // public getAllCountry = async () => {
    //     return await this.model.find();
    // }

    public addCountry = async (data: ICountry) => {
        await this.model.insertMany(data)
    }
}

export default CountryRepo;
