"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySchema = void 0;
const mongoose_1 = require("mongoose");
exports.propertySchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
