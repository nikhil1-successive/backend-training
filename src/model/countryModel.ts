import mongoose from 'mongoose'
const countrySchema = new mongoose.Schema({
    country: { type: String, required: true },
    captain: { type: String, required: true },
    playersName: [{ type: String }],
})

const countryModel = mongoose.model("country", countrySchema);
export default countryModel