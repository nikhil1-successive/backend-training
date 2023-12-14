import { add, sub, mul, div } from "./lib/math";
import fs from "fs";

const args: string[] = process.argv;
const operation: string | undefined = args[2];
const num1: number = parseFloat(args[3]);
const num2: number = parseFloat(args[4]);
const sumNumbers: number = add(num1, num2);
const subtractNumbers: number = sub(num1, num2);
const multiplyNumbers: number = mul(num1, num2);
const divideNumbers: number = div(num1, num2);
let result: number = 0;
let operationFeasible: boolean = true;
let userOperation: string = "";

if (operation === "+") {
    result += sumNumbers;
    userOperation = "Addition";
} else if (operation === "-") {
    result += subtractNumbers;
    userOperation = "Subtraction";
} else if (operation === "X") {
    result += multiplyNumbers;
    userOperation = "Multiplication";
} else if (operation === "/") {
    result += divideNumbers;
    userOperation = "Division";
} else {
    operationFeasible = false;
    console.log("Please perform mentioned Operation only.");
}

if (operationFeasible) {
    if (fs.existsSync("MathsOperationResult.xlsx")) {
        fs.appendFile(
            "MathsOperationResult.xlsx",
            `${userOperation},${num1},${num2},${result}\n`,
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
            "MathsOperationResult.xlsx",
            `Operation,Num1,Num2,Result\n${userOperation},${num1},${num2},${result}\n`,
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
