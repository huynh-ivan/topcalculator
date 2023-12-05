function add(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    displayOutput.textContent = sum;
    return sum;
}

function subtract(firstNumber, secondNumber) {
    const remainder = firstNumber - secondNumber
    displayOutput.textContent = remainder;
    return remainder;
}

function multiply(firstNumber, secondNumber) {
    const product = firstNumber * secondNumber
    displayOutput.textContent = product;
    return product;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return showSnarkyMessage();
    }
    const quotient = firstNumber / secondNumber
    displayOutput.textContent = quotient;
    return quotient;
}

// create an operate function that takes in two operands and an operator as parameters

function operate(firstNumber = 0, operator, secondNumber = 0) {

    // Logic for which operation to perform with the parameters
    if (operator === `add`) {
        return result = add(firstNumber, secondNumber);
    }

    if (operator === `subtract`) {
        return result = subtract(firstNumber, secondNumber);
    }

    if (operator === `multiply`) {
        return result = multiply(firstNumber, secondNumber);
    }

    if (operator === `divide` && secondNumber === 0) {
        showSnarkyMessage()
    }

    if (operator === `divide`) {
        return result = divide(firstNumber, secondNumber);
    }

    if (operator !== `add` && operator !== `subtract` && operator !== `multiply` && operator !== `divide`) {
        return handleInvalidOperator();
    }
}

function showSnarkyMessage() {
    const snark = `Snarky snark snark`
    displayOutput.textContent = snark;
    console.log('you sneaky dog you');
}

function clearHistory() {
    displayOutput.textContent = 0;
    userInputValues = [];
    currentOperand = 0;
    storedOperand = 0;
    operator = '';
    resultHistory = [];
    console.log('History was cleared')
    console.log(resultHistory);
}

function handleError() {
    console.log('Could not perform operation. Please try again')
}

function handleInvalidOperator() {
    const errorMessage = `Invalid Operator. +, - , * , or / are valid operators`
    console.log(errorMessage)
    return errorMessage
}

function go() {
    // initial values
    let userInputValues = [];
    let currentOperand = 0;
    let storedOperand = 0;
    let operator = '';
    let resultHistory = [];

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
            // if the results history is not empty
            if (resultHistory.length > 0) {
                storedOperand = resultHistory[resultHistory.length - 1];
                operator = operatorButton.id;
                return operator = operatorButton.id;
            }
            // if the resultsHistory is empty, 
            storedOperand = currentOperand;
            currentOperand = 0;
            userInputValues = [];
            return operator = operatorButton.id;

        })
    )

    //Get the equal button
    const equalButton = document.querySelector('#equals');
    equalButton.addEventListener('click', function () {
        const result = operate(storedOperand, operator, currentOperand);
        // After the result is computed, the currentOperand also resets to 0
        currentOperand = 0;
        userInputValues = [];
        operator = '';
        //store the result in the resultHistory
        resultHistory.push(result);
        return result;
    })

    //Get the clear button
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', clearHistory);
}

//Get the displayOutput
const displayOutput = document.querySelector('.displayOutput');
displayOutput.textContent = 0;


// initialize application 
go();




