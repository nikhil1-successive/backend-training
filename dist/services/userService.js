"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepo_js_1 = __importDefault(require("../repositories/UserRepo.js"));
class UserService {
    constructor() {
        this.getAllUsers = () => {
            this.repo.getAllUsers();
        };
        this.repo = new UserRepo_js_1.default();
    }
}
exports.default = UserService;
