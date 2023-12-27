import mongoose from 'mongoose';

const connectDB = async () => {
    const url: string = 'mongodb://localhost:27017/assignment-9_property_api';
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};
export default connectDB;
