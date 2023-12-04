const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/admin';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Some Error Occured.'));
db.once('open', () => {
    console.log('Successfully Connected To Database.');
});
