import { add, sub, mul, div } from "./lib/math.js";
import fs from "fs";

const args = process.argv;
const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);
const sumNumbers = add(num1, num2);
const subtractNumbers = sub(num1, num2);
const multiplyNumbers = mul(num1, num2);
const divideNumbers = div(num1, num2);
let result = 0;
let operationFeasible = true

if (operation === "+") {
    result += sumNumbers;
} else if (operation === "-") {
    result += subtractNumbers;
} else if (operation === "*") {
    result += multiplyNumbers;
} else if (operation === "/") {
    result += divideNumbers;
}
else {
    operationFeasible = false
    console.log("Please perform mentioned operations only.")
}

if (operationFeasible) {
    if (fs.existsSync("OperationResultData.csv")) {
        fs.appendFile(
            "OperationResultData.csv",
            `${operation},${num1},${num2},${result}\n`,
            (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Result successfully appended to the file.");
                }
            }
        );
    } else {
        fs.appendFile(
            "OperationResultData.csv",
            `Operation,Num1,Num2,Result\n${operation},${num1},${num2},${result}\n`,
            (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("New file created successfully and result appended in that.");
                }
            }
        );
    }
}
