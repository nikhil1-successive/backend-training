
const mongoose = require('mongoose');

const playingCountriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  playerName: String,
  playerAge:Number,
});

const PlayingCountries = mongoose.model('PlayingCountries', playingCountriesSchema);

module.exports =PlayingCountries;
