import mongoose from 'mongoose'
const countrySchema = new mongoose.Schema({
    name: { type: String }
})

const userModel = mongoose.model("user", countrySchema);
export default userModel