const db = require('./connection');
const PlayingCountries = require('./country');

const countriesData = [
    { name: 'India', captain: 'Rohit', playersName: ['Rohit Sharma (Captain)', 'Hardik Pandya', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer', 'KL Rahul', 'Ravindra Jadeja', 'Shardul Thakur', 'Jasprit Bumrah', 'Mohammed Siraj', 'Kuldeep Yadav', 'Mohammed Shami', 'Ravichandran Ashwin', 'Ishan Kishan', 'Suryakumar Yadav'] },
    { name: 'Australia', captain: 'Cummins', playersName: ['Pat Cummins (Captain)', 'Steve Smith', 'Alex Carey', 'Josh Inglis', 'Sean Abbot', 'Marnus Labuschagne', 'Cameron Green', 'Josh Hazlewood', 'Travis Head', 'Mitch Marsh', 'Glenn Maxwell', 'Marcus Stoinis', 'David Warner', 'Adam Zampa', 'Mitchell Starc'] },
];

const seedData = async () => {
    try {
        await PlayingCountries.insertMany(countriesData);
        console.log('Data Seeded Successfully To The Database.');
        showData()
        db.close();
    } catch (error) {
        console.error('Error Occurred In Seeding Database:', error);
    }
};

const showData = () => {
    try {
        console.log(db.PlayingCountries.find())
    }
    catch (error) {
        console.log("Some Error Occured While Showing Data")
    }
}
seedData();

