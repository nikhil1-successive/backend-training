"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.baseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.baseSchema = new mongoose_1.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
exports.baseSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});
exports.Base = (0, mongoose_1.model)('Base', exports.baseSchema);
