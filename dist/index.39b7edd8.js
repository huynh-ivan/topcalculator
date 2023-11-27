// create the add function
function add(operand1, operand2) {
    return operand1 + operand2;
}
// create the subtract function
function subtract(operand1, operand2) {
    return operand1 - operand2;
}
// create the multiply function
function multiply(operand1, operand2) {
    return operand1 * operand2;
}
// create the divide function
function divide(operand1, operand2) {
    return operand1 / operand2;
}
// create an operate function that takes in two operands and an operator as parameters
function operate(operand1, operator, operand2) {
    if (operator === `+`) return add(operand1, operand2);
    if (operator === `-`) return subtract(operand1, operand2);
    if (operator === `\*`) return multiply(operand1, operand2);
    if (operator === `\\`) return divide(operand1, operand2);
    return `Invalid operator provided.`;
} // make a button that calls the operate function when cliked or keydown'd

//# sourceMappingURL=index.39b7edd8.js.map
