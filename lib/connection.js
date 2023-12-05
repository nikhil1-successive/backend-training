import mongoose from 'mongoose'
const url = 'mongodb://localhost:27017/config';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully Connected To Database.');
});
export default db
