

const numberInput = document.querySelectorAll('.numberInput');
const operatorInput = document.querySelectorAll('.operatorInput');
const displayVal = document.querySelector('.display');
const finalAns = document.querySelector('.equals');

let firstNum = '';
let secondNum = '';
let tempNum = '';
let operatorType = '';

displayVal.textContent = '0';

//saves the number input values and displays them
numberInput.forEach(item => {
    item.addEventListener('click', event => {
        let buttonVal = item.textContent;
            if(displayVal.textContent==='÷' || displayVal.textContent==='x' || displayVal.textContent==='-' || displayVal.textContent==='+'){
            firstNum = tempNum;
            tempNum = '';
        };
        tempNum += buttonVal;
        changeDisplay(tempNum);
    })
});

//saves the operator input and displays it
operatorInput.forEach(item => {
    item.addEventListener('click', event => {
        if(operatorType!=='') calcAns(); //if there has been a previous calculation input without using =, calculate that first
        operatorType = item.textContent;
        changeDisplay(operatorType);
    })
});  

// clears the calculator by resetting all variables and displaying 0
function clearAll(){
    firstNum = '';
    secondNum = '';
    tempNum = '';
    operatorType = '';
    changeDisplay(0);
}

// calculate the answer using inputted numbers and operator
function calcAns(){
    if(operatorType==='') {changeDisplay(tempNum); return;}; //returns same number if user enters number then =
    tempNum = operate(operatorType, firstNum, tempNum);
    operatorType = '';
    changeDisplay(tempNum);
}

// update display
function changeDisplay(input){
    if(input==='Undefined') input = 0;
    displayVal.textContent = input;
};

function addPoint(){
    if(displayVal.textContent.includes('.')) return;
    tempNum += '.';
    changeDisplay(tempNum);
}


//basic maths functions to call

function add (a, b){
    return parseFloat(a) + parseFloat(b);
};

function subtract (a, b){
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b){
    return a / b;
};

// call relevant function based on user operator input
function operate (x, a, b){

    switch(x){
        case '+': 
            return add(a, b);
        case '-': 
           return subtract(a, b);
        case 'x': 
           return multiply(a, b);
        case '÷': 
            return divide(a, b);
    }

};
