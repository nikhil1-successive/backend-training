"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const countrySchema = new mongoose_1.default.Schema({
    country: { type: String, required: true },
    captain: { type: String, required: true },
    playersName: [{ type: String }],
});
const countryModel = mongoose_1.default.model("country", countrySchema);
exports.default = countryModel;
