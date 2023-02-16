let firstOperand = '';
let secondOperand = '';
let operator;
let results = 0;
let decimalLength = 0;
let secondOperandTemp;
let firstOperandTemp;
let firstOperandDisplay;

let displayResult = document.querySelector('.display-result');
let displayValue = document.querySelector('.display-value');
let operand = document.querySelectorAll('.btn');

operand.forEach(function(btns) {    
    btns.addEventListener("click", buttonClick);
});

document.addEventListener("keydown", keyPress);

function keyPress(e){
    let pressedKey = '';
    switch(e.key){
        case '0':
            pressedKey = 0;
            break;
        case '1':
            pressedKey = 1;
            break;
        case '2':
            pressedKey = 2;
            break;
        case '3':
            pressedKey = 3;
            break;
        case '4':
            pressedKey = 4;
            break;
        case '5':
            pressedKey = 5;
            break;
        case '6':
            pressedKey = 6;
            break;
        case '7':
            pressedKey = 7;
            break;
        case '8':
            pressedKey = 8;
            break;
        case '9':
            pressedKey = 9;
            break;
        case '+':
            pressedKey = '+';
            break;
        case '-':
            pressedKey = '-';
            break;
        case '*':
            pressedKey = '*';
            break;
        case '/':
            pressedKey = '/';
            break;
        case '.':
            pressedKey = '.';
            break;
        case 'a':
            pressedKey = 'allClear';
            break;
        case '=':
            pressedKey = '=';
            
    }
    
    checkValue(pressedKey);
}

function buttonClick(){
    checkValue(this.getAttribute('data-button'));
}

function checkValue(currValue){
    let currentValue = currValue;    
    let finalResults;
    let displayText;
 
    if(currentValue === 'allClear'){
        clearAll();
    }


    if(!isNaN(currentValue) || currentValue === "." || currentValue === 'negative'){

        if(!operator && secondOperand == ''){
            if(currentValue === '.'){
                if(firstOperand === ''){
                    firstOperand = 0;
                }else{
                    if(firstOperand.includes('.')){
                        currentValue = '';
                    }
                }
            }

            if(currentValue === 'negative'){
                if(firstOperand === ''){
                    firstOperand = 0 * -1;
                }else{
                    firstOperand = firstOperand * -1;
                }
            }else{
                firstOperand += currentValue
            }

            // (currentValue === 'negative') ? (firstOperand = firstOperand * -1) : firstOperand += currentValue;

            displayResult.innerText = firstOperand;
            
        }else{
            if(currentValue === '.'){
                if(secondOperand === ''){
                    secondOperand = 0;
                }else{
                    if(secondOperand.includes('.')){
                        currentValue = '';
                    }
                }
            }

            (currentValue === 'negative') ? (secondOperand = secondOperand * -1) : null;
            secondOperand += currentValue;
            displayResult.innerText += currentValue;
        }
    }else{
        if(firstOperand !== '' && secondOperand !== ''){
            
            finalResults = operate(parseFloat(firstOperand),operator,parseFloat(secondOperand),true);
            
            secondOperandTemp = secondOperand;
            secondOperand = '';

            if(firstOperandDisplay === undefined){
                firstOperandDisplay = firstOperand;
            }

            if(currentValue !== '='){
                
                
                displayText = `${firstOperandDisplay}${operator}${secondOperandTemp}=${finalResults}`;
                firstOperandDisplay = finalResults;
                displayValue.innerText =  displayText;
                operator = currentValue;
                displayResult.innerText = `${finalResults}${operator}`;
                
            }else{
                displayResult.innerText = finalResults;
                displayValue.innerText =  `${firstOperandDisplay}${operator}${secondOperandTemp}=${finalResults}`;
                firstOperandDisplay = finalResults;
            }
            
        }else if(firstOperand !== '' && secondOperand === ''){            
            
            if(currentValue !== '='){
                operator = currentValue; 
                displayResult.innerText += operator;
            }else{
                finalResults = operate(parseFloat(firstOperand),operator,parseFloat(secondOperandTemp),false);
                displayResult.innerText = finalResults;
                (operator === '*') ? displayText = `${firstOperandDisplay}${operator}${firstOperand}=${finalResults}` : displayText = `${firstOperandDisplay}${operator}${secondOperandTemp}=${finalResults}` ;
                displayValue.innerText =  displayText;
                firstOperandDisplay = finalResults;
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
                
                firstOperandTemp = results;
                results *= secondOperand;
                
            }else{
                (firstOperandTemp === undefined) ? firstOperandTemp = firstOperand : null;
                results *= firstOperandTemp;
                
            }            
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

   // firstOperandTemp = results;
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