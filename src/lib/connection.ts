import mongoose from 'mongoose';
import { Connection } from 'mongoose';

const url = 'mongodb://localhost:27017/playingcountry';
mongoose.connect(url);
const db: Connection = mongoose.connection;
db.once('open', () => {
    console.log('Successfully Connected To Database.');
});

export default db;
