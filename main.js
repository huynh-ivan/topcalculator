function add(storedOperand, currentOperand) {
    displayOutput.textContent = storedOperand + currentOperand;
    storedOperand = storedOperand + currentOperand
    console.log(storedOperand);
    return storedOperand // this output isn't stored so it's inaccessible
}

function subtract(storedOperand, currentOperand) {
    displayOutput.textContent = storedOperand - currentOperand;
    result = storedOperand - currentOperand
    console.log(result);
    return result;
}

function multiply(storedOperand, currentOperand) {
    displayOutput.textContent = storedOperand * currentOperand;
    result = storedOperand * currentOperand;
    console.log(result);
    return result;
}

function divide(storedOperand, currentOperand) {
    displayOutput.textContent = storedOperand / currentOperand;
    result = storedOperand / currentOperand
    console.log(result);
    return result;
}

// create an operate function that takes in two operands and an operator as parameters

function operate(firstNumber, operator, secondNumber) {
    const userInputValues = [];
    const currentOperand = 0; // 
    const storedOperand = 0;
    const operator = '';
    const result = 0;

    //Get the displayOutput
    const displayOutput = document.querySelector('.displayOutput');
    displayOutput.textContent = 0;
    displayOutput.value = 0;

    //Get the number buttons
    const numberButtons = document.querySelectorAll('.numberButton');
    numberButtons.forEach(
        button => button.addEventListener('click', function (e) {
            userInputValues.push(e.currentTarget.id);
            currentOperand = parseInt(userInputValues.join(''));
            displayOutput.textContent = currentOperand;
            return currentOperand;
        })
    )

    //Get the operator buttons
    const operatorButtons = document.querySelectorAll('.operatorButton');
    operatorButtons.forEach(operatorButton =>
        operatorButton.addEventListener('click', function () {
            // operatorButton.value = operatorButton.id;
            storedOperand = currentOperand;
            currentOperand = 0;
            userInputValues = [];
            return operator = operatorButton.id;
        })
    )

    // Logic for which operation to perform with the parameters
    if (operator === `add`) {
        add(storedOperand, currentOperand); // is a function declaration actually that helpful?
    }

    if (operator === `subtract`) {
        return subtract(storedOperand, currentOperand)
    }

    if (operator === `multiply`) {
        return multiply(storedOperand, currentOperand);
    }

    if (operator === `divide`) {
        return divide(storedOperand, currentOperand)
    }

    if (operator !== `add` && operator !== `subtract` && operator !== `multiply` && operator !== `divide` && operator !== `equals`) {
        return `Invalid operator provided. +, - , * , / , = are valid operators`
    }



}








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




