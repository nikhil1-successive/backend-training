import fs from "fs";

interface MathOperation {
    performOperation(num1: number, num2: number): number;
}

class Calculator implements MathOperation {
    private static instance: Calculator | null = null;
    private constructor() { }
    static getInstance(): Calculator {
        if (!Calculator.instance) {
            Calculator.instance = new Calculator();
        }
        return Calculator.instance;
    }
    performOperation(num1: number, num2: number): number {
        throw new Error("Method not implemented");
    }
    add(num1: number, num2: number): number {
        return num1 + num2;
    }
    subtract(num1: number, num2: number): number {
        return num1 - num2;
    }
    multiply(num1: number, num2: number): number {
        return num1 * num2;
    }
    divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }
}
const calculator = Calculator.getInstance();
const args: string[] = process.argv;
const operation: string | undefined = args[2];
const num1: number = parseFloat(args[3]);
const num2: number = parseFloat(args[4]);
let result: number;
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
const userOperation: string = operation || "";
const fileContent = `Operation,Num1,Num2,Result\n${userOperation},${num1},${num2},${result}\n`;
const fileName = "MathsOperationResult.xlsx";
if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, fileContent);
    console.log("Result successfully appended to the file.");
} else {
    fs.writeFileSync(fileName, `Operation,Num1,Num2,Result\n${fileContent}`);
    console.log("New file created successfully, and result appended to it.");
}
