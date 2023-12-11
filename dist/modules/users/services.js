"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const Model_1 = require("./repositories/Model");
class UserService {
    getAllUsers() {
        return Model_1.PropertyModel.find({});
    }
    getUserById(userId) {
        return Model_1.PropertyModel.findById(userId);
    }
    createUser(userData) {
        return Model_1.PropertyModel.create(userData);
    }
}
exports.UserService = UserService;
