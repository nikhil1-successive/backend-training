"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const services_1 = require("./services");
class UserController {
    constructor() {
        this.userService = new services_1.UserService();
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    getUserById(userId) {
        return this.userService.getUserById(userId);
    }
    createUser(userData) {
        return this.userService.createUser(userData);
    }
}
exports.UserController = UserController;
