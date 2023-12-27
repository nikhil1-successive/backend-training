"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserData {
    static getUsers() {
        return this.users;
    }
    static getUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}
UserData.users = [
    { email: 'nikhil@successive.com', password: 'nik123', name: 'Nikhil' },
    { email: 'somil@successive.com', password: 'somil123', name: 'Somil' },
];
exports.default = UserData;
