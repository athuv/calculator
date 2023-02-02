let firstOperand = 0;
let secondOperand = 0;
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

function clearAll(){
    firstOperand = 0;
    secondOperand = 0;
    operator = undefined;
    results = 0;
    decimalLength = 0;
}

// // operate(2,2,'+');
// console.log(operate(2,'+',2));