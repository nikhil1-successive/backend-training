import mongoose from 'mongoose'

const playingCountriesSchema = new mongoose.Schema({
    country: { type: String },
    captain: { type: String },
    playersName: [{
        type: String
    }]
});

const PlayingCountries = mongoose.model('PlayingCountries', playingCountriesSchema); //Collection Name, Collection Schema

export default PlayingCountries
