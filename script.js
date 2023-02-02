const firstOperand = 0;
const secondOperand = 0;
let operator;
let results = 0;
let decimalLength = 0;

function operate(firstOperand, operator, secondOperand) {

    decimalLength = decimalCount(firstOperand, secondOperand);

    if(operator === '+'){
        results ? results += secondOperand : results = firstOperand + secondOperand;
    }else if(operator === '-'){
        results ? results -= secondOperand : results = firstOperand - secondOperand;
    }else if(operator === '*'){
        results ? results *= firstOperand : results = firstOperand * secondOperand;
    }else if(operator === '/'){
        results ? results /= secondOperand : results = firstOperand / secondOperand;
    }

    return results.toFixed(decimalLength);
}

function isDecimal(firstOperand, secondOperand){
    if(!Number.isInteger(firstOperand) || !Number.isInteger(secondOperand)){
        return true;
    }
        return false;
}

function decimalCount(firstOperand, secondOperand){
    let firstLength = 0;
    let secondLength = 0;

    if(!Number.isInteger(firstOperand)){
        firstLength   = firstOperand.toString().split('.')[1].length;
    }
    
    if(!Number.isInteger(secondOperand)){
        secondLength  = secondOperand.toString().split('.')[1].length;
    }    

    return Math.max(firstLength, secondLength);
}

// // operate(2,2,'+');
// console.log(operate(2,'+',2));