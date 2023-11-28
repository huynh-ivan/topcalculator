// create the add function
function add(operand1, operand2) {
    return operand1 + operand2
}

// create the subtract function
function subtract(operand1, operand2) {
    return operand1 - operand2
}

// create the multiply function
function multiply(operand1, operand2) {
    return operand1 * operand2
}

// create the divide function
function divide(operand1, operand2) {
    return operand1 / operand2
}

// create an operate function that takes in two operands and an operator as parameters

function operate(operand1, operator, operand2) {
    if (operator === `+`) {
        return add(operand1, operand2)
    }

    if (operator === `-`) {
        return subtract(operand1, operand2)
    }

    if (operator === `*`) {
        return multiply(operand1, operand2)
    }

    if (operator === `/`) {
        console.log(operator);
        return divide(operand1, operand2)
    }

    if (operator !== `+` && operator !== `-` && operator !== `*` && operator !== `/`) {
        return `Invalid operator provided. +, - , * , / are valid operators`
    }
}

// when I click a number button
// if value is 0, set the value to the number
// if the value is not 0, concat the two values together into a string

// Select individual buttons and the displayOutput div
const displayValue = 0;
const displayOutput = document.querySelector('.displayOutput');
displayOutput.textContent = displayValue;

const numberButtons = document.querySelectorAll('.number');

// set the id of each button
function setButtonIDs() {
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].id = i;
        numberButtons[i].textContent = i;
        numberButtons[i].value = i;
    }
}

function updateOperand() {
    // if the displayValue, set the value to the number
    if (displayOutput.textContent === 0) { }
    // if the value is not 0, concat the two values together into a string
}

// Event Handlers
numberButtons.forEach(button => {
    button.addEventListener('click', updateOperand)
})


// Initialize application
setButtonIDs();


// update the display value


// functions that populate the displayOutput when buttons are clicked
// todo: write the pseudocode that describes what happens when a user interacts with a calculator. Need to figure out states + information storage


// initial value: when a user starts the caluclator
// - initial value = 0
// - the display value = initial value

// Number buttons / construct first operand
// - the initial value is set to the value of that button
// - clicking on a subsequent number button concats the first two values together
// i.e. clicking "9", and then "9" gives me "99" not "18"
// each subequent click concats the value onto the first string
// this continues for every digit until an operation button is clicked
// when an operation button is clicked the value is captured as an operand
// from there, if the user clicks a number button that begins the process to construct the next operand
// if the user clicks the equal sign (i.e. operand 1 and the operator has been specified) the first click the equal button returns the operand as the value
// if a user clicks a number, the next operand's construction starts
// if the user clicks the equal sign, the value of the first operand and the operator from the the previous phase will be substituted in as the operator and second operand for this 
// the corresponding operator is then set
// the result of this operation would be a string, not a number; I should coerce the resulting string into a number w/ parseInt()





// operation button
// at the initial state when initial value = 0, clicking the operation buttons don't do anything
// if there is an operand, clicking the operator button sets/locks in the first operand and sets the operator to be used for the operation


// second operand construction
// after a user sets the first operand and operator to be used, the next step is to construct the next operand
// the next operand will be constructed like the first operand
// if the equal button is clicked, the operands are evaluated together via the operator selected, with the resulting value being returned and displayed; this returned value also serves as the first operand of the next operation
// if an operator button is clicked the operands are evaluated together and the resulting value is 1) displayed in the caluclator 2) serves as the first operand for the next operation

// equal button
// if a operation has an initial operand, operator, and another operand, clicking the equal button evaluates those three things from left to right
// the resulting value from the operation becomes the displayValue and first operand of the next operation