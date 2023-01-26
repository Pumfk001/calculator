
//create basic functions to call

function add (a, b){
    return a + b;
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

const numberInput = document.querySelectorAll('.numberInput');
const operatorInput = document.querySelectorAll('.operatorInput');
const displayValue = document.querySelector('.display');
let firstNum = ''
let secondNum = ''

//use inputs from button clicks
numberInput.forEach(item => {
    item.addEventListener('click', event => {

    // console.log(displayValue.textContent);
    let buttonVal = item.textContent;

    
    // if(displayValue.textContent==='x'){
    //     secondNum += buttonVal;
    //     changeDisplay(secondNum);
    // };
        firstNum += buttonVal;
        changeDisplay(firstNum);
    })
});

operatorInput.forEach(item => {
    item.addEventListener('click', event => {
        let operatorType = item.textContent;
        changeDisplay(operatorType);
    })
});  



function changeDisplay(input){
    displayValue.textContent = input;
};
