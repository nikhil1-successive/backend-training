"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const country_1 = require("./country");
class SeedData {
    constructor() {
        this.countriesData = [
            {
                country: 'India',
                captain: 'Rohit',
                playersName: ['Rohit Sharma(Captain)', 'Hardik Pandya', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer', 'KL Rahul', 'Ravindra Jadeja', 'Shardul Thakur', 'Jasprit Bumrah', 'Mohammed Siraj', 'Kuldeep Yadav', 'Mohammed Shami', 'Ravichandran Ashwin', 'Ishan Kishan', 'Suryakumar Yadav'],
            },
            {
                country: 'Australia',
                captain: 'Cummins',
                playersName: ['Pat Cummins (Captain)', 'Steve Smith', 'Alex Carey', 'Josh Inglis', 'Sean Abbot', 'Marnus Labuschagne', 'Cameron Green', 'Josh Hazlewood', 'Travis Head', 'Mitch Marsh', 'Glenn Maxwell', 'Marcus Stoinis', 'David Warner', 'Adam Zampa', 'Mitchell Starc'],
            },
        ];
        this.seedData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield country_1.PlayingCountries.insertMany(this.countriesData);
                console.log('Data Seeded Successfully To The Database.');
                connection_1.default.close();
            }
            catch (error) {
                console.error('Error Occurred In Seeding Database:', error);
            }
        });
    }
}
exports.default = SeedData;
