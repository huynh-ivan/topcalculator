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
    let computedResult = 0;

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
            // Updates the storedOperand var
            storedOperand = currentOperand;
            // Set the currentOperand back to zero
            currentOperand = 0; // 
            // Set the userInputValues array back to an empty array;
            userInputValues = [];
            return operator = operatorButton.id;
        })
    )

    //Get the equal button
    const equalButton = document.querySelector('#equals');
    equalButton.addEventListener('click', function () {

        console.log(currentOperand);
        console.log(storedOperand);
        console.log(operator);

        const result = operate(storedOperand, operator, currentOperand);
        console.log(result);
    })

    //Get the clear button
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', function () {
        console.clear();
        displayOutput.textContent = 0;
        userInputValues = [];
        currentOperand = 0;
        storedOperand = 0;
        operator = '';
    })
}

//Get the displayOutput
const displayOutput = document.querySelector('.displayOutput');
displayOutput.textContent = 0;


// initialize application 
go();




