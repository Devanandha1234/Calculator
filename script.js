
let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
}

function calculate() {
    let secondOperand = currentInput;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }

    display.value = result;
    currentInput = result;
    operator = '';
    firstOperand = '';
}
