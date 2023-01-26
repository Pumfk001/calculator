

const numberInput = document.querySelectorAll('.numberInput');
const operatorInput = document.querySelectorAll('.operatorInput');
const displayVal = document.querySelector('.display');
const finalAns = document.querySelector('.equals');

let firstNum = '';
let secondNum = '';
let tempNum = '';
let operatorType = '';

displayVal.textContent = '0';

//use inputs from button clicks
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

operatorInput.forEach(item => {
    item.addEventListener('click', event => {
        if(operatorType!=='') calcAns(); 
        operatorType = item.textContent;
        changeDisplay(operatorType);
    })
});  

function clearAll(){
    firstNum = '';
    secondNum = '';
    tempNum = '';
    operatorType = '';
    changeDisplay(0);
}

function calcAns(){
    if(operatorType==='') {changeDisplay(tempNum); return;};
    // if(tempNum==='Undefined') {changeDisplay(0); return;};
    tempNum = operate(operatorType, firstNum, tempNum);
    operatorType = '';
    changeDisplay(tempNum);
}

function changeDisplay(input){
    if(input==='Undefined') input = 0;
    displayVal.textContent = input;
};


//create basic functions to call

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
