function add(firstNumber, secondNumber) {
    displayOutput.textContent = firstNumber + secondNumber;
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    displayOutput.textContent = firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    displayOutput.textContent = firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    displayOutput.textContent = firstNumber / secondNumber;
}

// create an operate function that takes in two operands and an operator as parameters

function operate(firstNumber, operator, secondNumber) {
    // Logic for which operation to perform with the parameters
    if (operator === `add`) {
        return result = add(firstNumber, secondNumber);
    }

    if (operator === `subtract`) {
        return subtract(firstNumber, secondNumber)
    }

    if (operator === `multiply`) {
        return multiply(firstNumber, secondNumber);
    }

    if (operator === `divide`) {
        return divide(firstNumber, secondNumber)
    }

    if (operator !== `add` && operator !== `subtract` && operator !== `multiply` && operator !== `divide` && operator !== `equals`) {
        return `Invalid operator provided. +, - , * , / , = are valid operators`
    }
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
            // if the resultsHistory is not empty
            // if the results history is empty
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
            console.log(resultHistory.length);
            if (resultHistory.length > 0) {
                storedOperand = resultHistory[resultHistory.length - 1];
                console.log(storedOperand);
            } else {
                // if the resultsHistory is empty, 
                console.log(currentOperand);
                storedOperand = currentOperand;
                currentOperand = 0;
                userInputValues = [];
                return operator = operatorButton.id;
            }
        })
    )

    //Get the equal button
    const equalButton = document.querySelector('#equals');
    equalButton.addEventListener('click', function () {

        console.log(currentOperand);
        console.log(storedOperand);
        console.log(operator);
        console.log(resultHistory);

        const result = operate(storedOperand, operator, currentOperand);
        console.log(result);

        // After the result is computed, the currentOperand also resets to 0
        currentOperand = 0;
        userInputValues = [];

        //store the result in the resultHistory
        resultHistory.push(result);
        console.log(resultHistory, resultHistory.length);
    })

    //How do I know if an equation has been already completed?
    // maybe I can store the results from an operation in an array
    // if the array is empty, that means there is no "history" of operations
    // if the array has at least one object, that means there have been previous operations
    // I should be able to get result of the latest operation by using the array[length - 1]
    // I may need to update the eventlisteners functions to check if there is a value in the resultHistory

    //Get the clear button
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', function () {
        console.clear();
        displayOutput.textContent = 0;
        userInputValues = [];
        currentOperand = 0; // it seems that there are multiple places where the currentOperand and userInputValues must be reset
        storedOperand = 0;
        operator = '';
        resultHistory = [];
    })
}

//Get the displayOutput
const displayOutput = document.querySelector('.displayOutput');
displayOutput.textContent = 0;


// initialize application 
go();




