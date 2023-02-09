let firstOperand = '';
let secondOperand = '';
let operator;
let results = 0;
let decimalLength = 0;
let secondOperandTemp;
let firstOperandTemp;
let tempOperand;

let displayResult = document.querySelector('.display-result');
let displayValue = document.querySelector('.display-value');
let operand = document.querySelectorAll('.btn');

operand.forEach(function(btns) {    
    btns.addEventListener("click", checkValue);
});

function checkValue(){
    let currentValue = this.getAttribute('data-button');    
    let finalResults;
    let displayText;
 

    if(currentValue === 'allClear'){
        clearAll();
    }


    if(!isNaN(currentValue) || currentValue === "." || currentValue === 'negative'){
        if(!operator && secondOperand == 0){
            (currentValue === 'negative') ? (firstOperand = firstOperand * -1) : (firstOperand += currentValue);
            displayResult.innerText = firstOperand;
            
        }else{
            (currentValue === 'negative') ? (secondOperand = secondOperand * -1) : (secondOperand += currentValue);
            displayResult.innerText += secondOperand; 
        }
    }else{
        if(firstOperand !== '' && secondOperand !== ''){
            
            finalResults = operate(parseFloat(firstOperand),operator,parseFloat(secondOperand),true);
            
            secondOperandTemp = secondOperand;
            secondOperand = '';
            if(currentValue !== '='){
                
                console.log(`if here ${tempOperand}`);
                 if(tempOperand === undefined){
                     tempOperand = firstOperand;
                 }
                displayText = `${tempOperand}${operator}${secondOperandTemp}=${finalResults}`;
                tempOperand = finalResults;
                displayValue.innerText =  displayText;
                operator = currentValue;
                displayResult.innerText = `${finalResults}${operator}`;
                
            }else{
                displayResult.innerText = finalResults;
                displayValue.innerText =  `${firstOperand}${operator}${secondOperandTemp}=${finalResults}`;
            }
            
        }else if(firstOperand !== '' && secondOperand === ''){            
            
            if(currentValue !== '='){
                operator = currentValue; 
                displayResult.innerText += operator;
            }else{
                finalResults = operate(parseFloat(firstOperand),operator,parseFloat(secondOperandTemp),false);
                console.log(`== ${finalResults}`);
                console.log(`== ${operator}`);
            }
            
        }else{
            
        }
    }
}

function operate(firstOperand, operator, secondOperand, isEqual) {

    decimalLength = decimalCount(firstOperand, secondOperand);

    if(operator === '+'){
        if(results !== 0){
            results += secondOperand;
        }else{
            results = firstOperand + secondOperand;
        }
        
    }else if(operator === '-'){
        if(results !== 0){
            results -= secondOperand;
        }else{
            results = firstOperand - secondOperand;
        }
    }else if(operator === '*'){
        if(results !== 0){
            
            if(isEqual){
                console.log('true');
                firstOperandTemp = results;
                results *= secondOperand;
                
            }else{
                (firstOperandTemp === undefined) ? firstOperandTemp = firstOperand : null;
                results *= firstOperandTemp;
                
            }
            // isEqual ? (console.log('true'),results *= secondOperand, secondOperand = results) : (console.log('false'),results *= firstOperand);
            //results *= firstOperand;
            
        }else{
            results = firstOperand * secondOperand;
        }
    }else if(operator === '/'){
        if(results !== 0){
            results /= secondOperand;
        }else{
            results = firstOperand / secondOperand;
        }
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
    firstOperand = '';
    secondOperand = '';
    operator = undefined;
    results = 0;
    decimalLength = 0;
    displayResult.innerText = 0;
    displayValue.innerText = 0;
    secondOperandTemp = undefined;
    firstOperandTemp = undefined;
}

// // operate(2,2,'+');
// console.log(operate(2,'+',2));