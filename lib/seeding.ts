import db from './connection.ts';
import PlayingCountries, { IPlayingCountry } from './country.ts';

interface IPlayer {
  country: string;
  captain: string;
  playersName: string[];
}

const countriesData: IPlayer[] = [
  { country: 'India', captain: 'Rohit', playersName: ['Rohit Sharma (Captain)', 'Hardik Pandya', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer', 'KL Rahul', 'Ravindra Jadeja', 'Shardul Thakur', 'Jasprit Bumrah', 'Mohammed Siraj', 'Kuldeep Yadav', 'Mohammed Shami', 'Ravichandran Ashwin', 'Ishan Kishan', 'Suryakumar Yadav'] },
  { country: 'Australia', captain: 'Cummins', playersName: ['Pat Cummins (Captain)', 'Steve Smith', 'Alex Carey', 'Josh Inglis', 'Sean Abbot', 'Marnus Labuschagne', 'Cameron Green', 'Josh Hazlewood', 'Travis Head', 'Mitch Marsh', 'Glenn Maxwell', 'Marcus Stoinis', 'David Warner', 'Adam Zampa', 'Mitchell Starc'] },
];

const seedData = async () => {
  try {
    await PlayingCountries.insertMany(countriesData as IPlayingCountry[]);
    console.log('Data Seeded Successfully To The Database.');
    db.close();
  } catch (error) {
    console.error('Error Occurred In Seeding Database:', error);
  }
};

seedData();
