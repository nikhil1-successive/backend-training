"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CountryRepo_1 = __importDefault(require("../repositories/CountryRepo"));
class CountryService {
    constructor() {
        this.getAllCountry = async () => {
            await this.repo.getAllCountry();
        };
        this.addCountry = async (data) => {
            await this.repo.addCountry(data);
        };
        this.repo = new CountryRepo_1.default();
    }
}
exports.default = CountryService;
