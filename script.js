
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
