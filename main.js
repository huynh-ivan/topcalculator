// create the add function
function add(storedOperand, currentOperand) {
    return result = storedOperand + currentOperand
}

// create the subtract function
function subtract(storedOperand, currentOperand) {
    return storedOperand - currentOperand
}

// create the multiply function
function multiply(storedOperand, currentOperand) {
    return storedOperand * currentOperand
}

// create the divide function
function divide(storedOperand, currentOperand) {
    return storedOperand / currentOperand
}

// create an operate function that takes in two operands and an operator as parameters

function operate(storedOperand, operator, currentOperand) {
    // console.log(storedOperand, operator, currentOperand);
    // Logic for which operation to perform with the parameters
    if (operator === `add`) {
        return add(storedOperand, currentOperand)
    }

    if (operator === `subtract`) {
        return subtract(storedOperand, currentOperand)
    }

    if (operator === `multiply`) {
        return multiply(storedOperand, currentOperand)
    }

    if (operator === `divide`) {
        console.log(operator);
        return divide(storedOperand, currentOperand)
    }

    if (operator !== `+` && operator !== `-` && operator !== `*` && operator !== `/`) {
        return `Invalid operator provided. +, - , * , / are valid operators`
    }
    console.log(result);
    return result;
}


//Get the displayOutput
const displayOutput = document.querySelector('.displayOutput');
displayOutput.textContent = 0;
displayOutput.value = 0;

//Get the number buttons

let userInputValues = [];
let currentOperand = 0; // 
let storedOperand = 0;
let operator = '';
let result;

const numberButtons = document.querySelectorAll('.numberButton');
numberButtons.forEach(
    button => button.addEventListener('click', function (e) {
        userInputValues.push(e.currentTarget.id);
        currentOperand = parseInt(userInputValues.join(''));
        return currentOperand;
    }
    )
)

//Get the operator buttons
const operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach(operatorButton =>
    operatorButton.addEventListener('click', function (e) {
        operatorButton.value = operatorButton.id;
        storedOperand = currentOperand;
        currentOperand = 0;
        userInputValues = [];
        return operator = operatorButton.value;
    }
    )
)

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', operate);





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




