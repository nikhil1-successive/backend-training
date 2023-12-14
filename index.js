"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./lib/math");
const fs_1 = __importDefault(require("fs"));
const args = process.argv;
const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);
const sumNumbers = (0, math_1.add)(num1, num2);
const subtractNumbers = (0, math_1.sub)(num1, num2);
const multiplyNumbers = (0, math_1.mul)(num1, num2);
const divideNumbers = (0, math_1.div)(num1, num2);
let result = 0;
let operationFeasible = true;
let userOperation = "";
if (operation === "+") {
    result += sumNumbers;
    userOperation = "Addition";
}
else if (operation === "-") {
    result += subtractNumbers;
    userOperation = "Subtraction";
}
else if (operation === "X") {
    result += multiplyNumbers;
    userOperation = "Multiplication";
}
else if (operation === "/") {
    result += divideNumbers;
    userOperation = "Division";
}
else {
    operationFeasible = false;
    console.log("Please perform mentioned Operation only.");
}
if (operationFeasible) {
    if (fs_1.default.existsSync("MathsOperationResult.xlsx")) {
        fs_1.default.appendFile("MathsOperationResult.xlsx", `${userOperation},${num1},${num2},${result}\n`, (err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log("Result successfully appended to the file.");
            }
        });
    }
    else {
        fs_1.default.appendFile("MathsOperationResult.xlsx", `Operation,Num1,Num2,Result\n${userOperation},${num1},${num2},${result}\n`, (err) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log("New file created successfully and result appended in that.");
            }
        });
    }
}
