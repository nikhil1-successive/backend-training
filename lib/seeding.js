const db = require('./connection');
const PlayingCountries = require('./country');

const countriesData = [
    { name: 'India', captain: 'Rohit' },
    { name: 'Australia', captain: 'Cummins' },
];

const seedData = async () => {
    try {
        await PlayingCountries.insertMany(countriesData);
        console.log('Data Seeded Successfully To The Database.');
        db.close();
    } catch (error) {
        console.error('Error Occurred In Seeding Database:', error);
    }
};

seedData();
