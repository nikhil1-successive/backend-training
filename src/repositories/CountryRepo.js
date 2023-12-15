"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countryModel_1 = __importDefault(require("../model/countryModel"));
class CountryRepo {
    constructor() {
        this.getAllCountry = async () => {
            return await this.model.find();
        };
        this.addCountry = async (data) => {
            await this.model.insertMany(data);
        };
        this.model = countryModel_1.default;
    }
}
exports.default = CountryRepo;
