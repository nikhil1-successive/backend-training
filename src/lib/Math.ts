import lodash from "lodash";

class MathOperations {
    private lodashInstance: typeof lodash;
    constructor(lodashInstance: typeof lodash) {
        this.lodashInstance = lodashInstance;
    }
    // addition method
    add(num1: number, num2: number): number {
        return this.lodashInstance.sum([num1, num2]);
    }
    // subtraction method
    sub(num1: number, num2: number): number {
        return this.lodashInstance.subtract(num1, num2);
    }
    //multiplication method
    mul(num1: number, num2: number): number {
        return this.lodashInstance.multiply(num1, num2);
    }
    //divison method
    div(num1: number, num2: number): number {
        return this.lodashInstance.divide(num1, num2);
    }
}
// instnace of class
const mathOperations = new MathOperations(lodash);
export default mathOperations;