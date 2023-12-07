// import mongoose, { Document, Schema } from 'mongoose';

// interface IPlayingCountries extends Document {
//     country: string;
//     captain: string;
//     playersName: string[];
// }

// const playingCountriesSchema: Schema<IPlayingCountries> = new mongoose.Schema({
//     country: { type: String, required: true },
//     captain: { type: String, required: true },
//     playersName: [{ type: String }],
// });

// const PlayingCountries = mongoose.model<IPlayingCountries>('PlayingCountries', playingCountriesSchema);

// export { PlayingCountries, IPlayingCountries };
// PlayingCountries.ts
import mongoose, { Document, Schema } from 'mongoose';
import userModel from '../model/countryModel';  // Import userModel from countryModel.ts

interface IPlayingCountries extends Document {
    country: string;
    captain: string;
    playersName: string[];
}

const playingCountriesSchema: Schema<IPlayingCountries> = new mongoose.Schema({
    country: { type: String, required: true },
    captain: { type: String, required: true },
    playersName: [{ type: String }],
});

const PlayingCountries = mongoose.model<IPlayingCountries>('PlayingCountries', playingCountriesSchema);



export { PlayingCountries, IPlayingCountries };
