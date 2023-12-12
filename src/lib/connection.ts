import mongoose from 'mongoose'
class Connection {
    private url: string = 'mongodb://localhost:27017/config';
    public connectDB = async () => {
        try {
            await mongoose.connect(this.url);
            console.log("Connected")
        }
        catch (error) {
            console.log(error)
        }
    }
}
export default Connection