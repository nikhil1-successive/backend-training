"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countryService_js_1 = __importDefault(require("../services/countryService.js"));
class CountryController {
    constructor() {
        this.countryService = new countryService_js_1.default();
        this.getAllCountry = async (req, res) => {
            const data = await this.countryService.getAllCountry();
            res.send(data);
        };
        this.addCountry = async (req, res) => {
            const data = req.body;
            await this.countryService.addCountry(data);
            res.send("Data added");
        };
    }
}
exports.default = CountryController;
