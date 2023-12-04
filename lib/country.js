const mongoose = require('mongoose');

const playingCountriesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    captain: String,
});

const PlayingCountries = mongoose.model('PlayingCountries', playingCountriesSchema);

module.exports = PlayingCountries;
