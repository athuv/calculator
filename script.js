const firstOperand = 0;
const secondOperand = 0;
let operator;
let results;

function operate(firstOperand, operator, secondOperand) {
    if(operator === '+'){
        return add(firstOperand, secondOperand);
    }else if(operator === '-'){
        return subtract(firstOperand, secondOperand);
    }else if(operator === '*'){
        return multiply(firstOperand, secondOperand);
    }else if(operator === '/'){
        return divide(firstOperand, secondOperand);
    }
}

function add(firstOperand, secondOperand){ 
    if(results){
        results = secondOperand + results;
        return results;
    }
    console.log(`not empty`);
    results = firstOperand + secondOperand;
    return results;
}

function subtract(firstOperand, secondOperand){ 
    if(results){
        results = secondOperand - results;
        return results;
    }
    results = firstOperand - secondOperand;
    return results;
}

function multiply(firstOperand, secondOperand){ 
    if(results){
        results = secondOperand * results;
        return results;
    }
    results = firstOperand * secondOperand;
    return results;
}

function divide(firstOperand, secondOperand){ 
    if(results){
        results = secondOperand / results;
        return results.toFixed(10);
    }
    results = firstOperand / secondOperand;
    return results.toFixed(10);;
}

// // operate(2,2,'+');
// console.log(operate(2,'+',2));