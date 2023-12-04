
const Country = require('./country');
const db = require('./connection');

const countriesData = [

  { name: 'India',  },
  { name: 'Brazil', },
];

const seedDatabase = async () => {
  try {

    await Country.insertMany(countriesData);
    console.log('Data Seeded Successfully To The Database.');
  } catch (error) {
    console.error('Error Occured In Seeding Database:', error);
  } finally {
    db.close();
  }
};

seedDatabase();
