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
let userOperation = ""

if (operation === "+") {
    result += sumNumbers;
    userOperation = "Addition"
} else if (operation === "-") {
    result += subtractNumbers;
    userOperation = "Subtraction"
} else if (operation === "X") {
    result += multiplyNumbers;
    userOperation = "Multiplication"
} else if (operation === "/") {
    result += divideNumbers;
    userOperation = "Divison"
}
else {
    operationFeasible = false
    console.log("Please perform mentioned Operation only.")
}

if (operationFeasible) {
    if (fs.existsSync("Maths Operation Result.xlsx")) {
        fs.appendFile(
            "Maths Operation Result.xlsx",
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
            "Maths Operation Result.xlsx",
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