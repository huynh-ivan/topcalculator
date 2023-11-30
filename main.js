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
    // Logic for which operation to perform with the parameters
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






//Get the displayOutput
const displayOutput = document.querySelector('.displayOutput');
displayOutput.textContent = 0;
displayOutput.value = 0;

//Get the number buttons
const numberButtons = document.querySelectorAll('.numberButton');

//Get the operator buttons
const operatorButtons = document.querySelectorAll('.operatorButton');





// Add EventListener
equalButton.addEventListener('click', operate);

//initialize calculator
setupCalc();






/*Number buttons behavior
    store the value of number buttons somehow -> possibly an array
    make the display value = the parseInt(storedNumbers)
    
    when a button is clicked, push the number into the array
        
    when the array is parsed, it should concat all of the items in it
        i.e. clicking "9"and then "9" gives me "99" not "18"
    
    
*/

/* Operator button behavior
    return the corresponding operator symbol to the operate() function
    on a calculator, clicking an operator button 'locks' in an operand; 
        need to store this operand somehow

*/


/* Equal button behavior
    call the operate() function

*/




