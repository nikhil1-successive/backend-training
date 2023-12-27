"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = 'mongodb://localhost:27017/playingcountry';
mongoose_1.default.connect(url);
const db = mongoose_1.default.connection;
db.once('open', () => {
    console.log('Successfully Connected To Database.');
});
exports.default = db;
