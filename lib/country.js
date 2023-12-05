const mongoose = require('mongoose');

const playingCountriesSchema = new mongoose.Schema({
    country: { type: String },
    captain: { type: String },
    playersName: [{
        type: String
    }]
});

const PlayingCountries = mongoose.model('PlayingCountries', playingCountriesSchema); //Collection Name, Collection Schema

module.exports = PlayingCountries;
