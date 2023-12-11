"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyModel = void 0;
const mongoose_1 = require("mongoose");
const propertySchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
exports.PropertyModel = (0, mongoose_1.model)('Todo', propertySchema);
