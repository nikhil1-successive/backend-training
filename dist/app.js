"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function run() {
    app.use('/route', index_1.default);
}
exports.default = run;
