"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Calculator {
    constructor() { }
    static getInstance() {
        if (!Calculator.instance) {
            Calculator.instance = new Calculator();
        }
        return Calculator.instance;
    }
    performOperation(num1, num2) {
        throw new Error("Method not implemented");
    }
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    multiply(num1, num2) {
        return num1 * num2;
    }
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }
}
Calculator.instance = null;
const calculator = Calculator.getInstance();
const args = process.argv;
const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);
let result;
switch (operation) {
    case "+":
        result = calculator.add(num1, num2);
        break;
    case "-":
        result = calculator.subtract(num1, num2);
        break;
    case "X":
        result = calculator.multiply(num1, num2);
        break;
    case "/":
        result = calculator.divide(num1, num2);
        break;
    default:
        console.log("Please perform a valid operation: +, -, X, /");
        process.exit(1);
}
const userOperation = operation || "";
const fileContent = `Operation,Num1,Num2,Result\n${userOperation},${num1},${num2},${result}\n`;
const fileName = "MathsOperationResult.xlsx";
if (fs_1.default.existsSync(fileName)) {
    fs_1.default.appendFileSync(fileName, fileContent);
    console.log("Result successfully appended to the file.");
}
else {
    fs_1.default.writeFileSync(fileName, `Operation,Num1,Num2,Result\n${fileContent}`);
    console.log("New file created successfully, and result appended to it.");
}
