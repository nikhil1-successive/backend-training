"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSeeder = void 0;
class DataSeeder {
    constructor() {
        this.foodData = ["Paneer", "Chola", "Chicken"];
    }
    seedData() {
        console.log("Data seeding started");
        console.log("Data seeding in progress");
        return this.foodData;
    }
}
exports.DataSeeder = DataSeeder;
