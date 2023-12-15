"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Connection {
    constructor() {
        this.url = 'mongodb://localhost:27017/config';
        this.connectDB = async () => {
            try {
                await mongoose_1.default.connect(this.url);
                console.log("Connected");
            }
            catch (error) {
                console.log(error);
            }
        };
    }
}
exports.default = Connection;
