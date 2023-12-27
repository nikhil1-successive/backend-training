"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class MathOperations {
    constructor(lodashInstance) {
        this.lodashInstance = lodashInstance;
    }
    // addition method
    add(num1, num2) {
        return this.lodashInstance.sum([num1, num2]);
    }
    // subtraction method
    sub(num1, num2) {
        return this.lodashInstance.subtract(num1, num2);
    }
    //multiplication method
    mul(num1, num2) {
        return this.lodashInstance.multiply(num1, num2);
    }
    //divison method
    div(num1, num2) {
        return this.lodashInstance.divide(num1, num2);
    }
}
// instnace of class
const mathOperations = new MathOperations(lodash_1.default);
exports.default = mathOperations;
