import mongoose from 'mongoose';
import countryModel from '../model/countryModel';
import ICountry from '../interface/ICountry';

class CountryRepo {
    private model: mongoose.Model<any>;

    constructor() {
        this.model = countryModel;
    }

    public getAllCountry = async () => {
        return await this.model.find();
    }

    public addCountry = async (data:ICountry) => {
        // await this.model.create([
        //     {
        //         country: 'India',
        //         captain: 'Rohit',
        //         playersName: ['Rohit Sh(Captain)', 'Hardik Pandya', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer', 'KL Rahul', 'Ravindra Jadeja', 'Shardul Thakur', 'Jasprit Bumrah', 'Mohammed Siraj', 'Kuldeep Yadav', 'Mohammed Shami', 'Ravichandran Ashwin', 'Ishan Kishan', 'Suryakumar Yadav'],
        //     },
        //     {
        //         country: 'Australia',
        //         captain: 'Cummins',
        //         playersName: ['Pat Cum (Captain)', 'Steve Smith', 'Alex Carey', 'Josh Inglis', 'Sean Abbot', 'Marnus Labuschagne', 'Cameron Green', 'Josh Hazlewood', 'Travis Head', 'Mitch Marsh', 'Glenn Maxwell', 'Marcus Stoinis', 'David Warner', 'Adam Zampa', 'Mitchell Starc'],
        //     },
        // ]);
        await this.model.insertMany(data)
    }
}

export default CountryRepo;
