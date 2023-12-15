"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
const lodash_1 = __importDefault(require("lodash"));
function add(num1, num2) {
    return lodash_1.default.sum([num1, num2]);
}
exports.add = add;
function sub(num1, num2) {
    return lodash_1.default.subtract(num1, num2);
}
exports.sub = sub;
function mul(num1, num2) {
    return lodash_1.default.multiply(num1, num2);
}
exports.mul = mul;
function div(num1, num2) {
    return lodash_1.default.divide(num1, num2);
}
exports.div = div;
