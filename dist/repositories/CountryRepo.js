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
const countryModel_1 = __importDefault(require("../model/countryModel"));
class CountryRepo {
    constructor() {
        this.getAllCountry = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
        this.addCountry = (data) => __awaiter(this, void 0, void 0, function* () {
            // await this.model.create([
            //     {
            //         country: 'India',
            //         captain: 'Rohit',
            //         playersName: ['Rohit Sh(Captain)', 'Hardik Pandya', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer', 'KL Rahul', 'Ravindra Jadeja', 'Shardul Thakur', 'Jasprit Bumrah', 'Mohammed Siraj', 'Kuldeep Yadav', 'Mohammed Shami', 'Ravichandran Ashwin', 'Ishan Kishan', 'Suryakumar Yadav'],
            //     },
            //     {
            //         country: 'Australia',
            //         captain: 'Cummins',
            //         playersName: ['Pat Cum (Captain)', 'Steve Smith', 'Alex Carey', 'Josh Inglis', 'Sean Abbot', 'Marnus Labuschagne', 'Cameron Green', 'Josh Hazlewood', 'Travis Head', 'Mitch Marsh', 'Glenn Maxwell', 'Marcus Stoinis', 'David Warner', 'Adam Zampa', 'Mitchell Starc'],
            //     },
            // ]);
            yield this.model.insertMany(data);
        });
        this.model = countryModel_1.default;
    }
}
exports.default = CountryRepo;
