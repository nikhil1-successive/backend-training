"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_js_1 = __importDefault(require("../model/userModel.js"));
class UserRepo {
    constructor() {
        this.getAllUsers = () => {
            this.model.find();
        };
        this.model = userModel_js_1.default;
    }
}
exports.default = UserRepo;
