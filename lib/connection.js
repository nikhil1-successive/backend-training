const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/admin';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully Connected To Database.');
});
module.exports=db
