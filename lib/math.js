import lodash from "lodash"

function add(num1, num2) {
    return lodash.sum([num1, num2]);
}
function sub(num1, num2) {
    return lodash.subtract(num1, num2);
}
function mul(num1, num2) {
    return lodash.multiply(num1, num2);
}
function div(num1, num2) {
    return lodash.divide(num1, num2);
}

export { add, sub, mul, div }