"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayingCountries = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const playingCountriesSchema = new mongoose_1.default.Schema({
    country: { type: String, required: true },
    captain: { type: String, required: true },
    playersName: [{ type: String }],
});
const PlayingCountries = mongoose_1.default.model('PlayingCountries', playingCountriesSchema);
exports.PlayingCountries = PlayingCountries;
