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
const countryService_js_1 = __importDefault(require("../services/countryService.js"));
class CountryController {
    constructor() {
        this.countryService = new countryService_js_1.default();
        this.getAllCountry = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.countryService.getAllCountry();
            res.send(data);
        });
        this.addCountry = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            yield this.countryService.addCountry(data);
            res.send("Data added");
        });
    }
}
exports.default = CountryController;