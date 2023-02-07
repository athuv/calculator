let firstOperand = '';
let secondOperand = '';
let operator;
let results = 0;
let decimalLength = 0;
let secondOperandTemp;
let firstOperandTemp;
let isEqual;

let operand = document.querySelectorAll('.btn');
operand.forEach(function(btns) {    
    btns.addEventListener("click", checkValue);
});

function checkValue(){
    let currentValue = this.getAttribute('data-button');
    let fin;

    if(currentValue === 'allClear'){
        clearAll();
    }


    if(!isNaN(currentValue) || currentValue === "." || currentValue === 'negative'){
        if(!operator && secondOperand == 0){
            (currentValue === 'negative') ? (firstOperand = firstOperand * -1) : (firstOperand += currentValue);
            console.log(`${firstOperand} `);
        }else{
            (currentValue === 'negative') ? (secondOperand = secondOperand * -1) : (secondOperand += currentValue);
            console.log(`${secondOperand}`);   
        }
    }else{
        

        
        if(firstOperand !== '' && secondOperand !== ''){
            
            isEqual = true;
            fin = operate(parseFloat(firstOperand),operator,parseFloat(secondOperand),isEqual);
            secondOperandTemp = secondOperand;
            secondOperand = '';
            isEqual = false;
            if(currentValue !== '='){
                operator = currentValue;
                
            }
            console.log(`= ${fin}`);
        }else if(firstOperand !== '' && secondOperand === ''){            
            
            if(currentValue !== '='){
                operator = currentValue;                
                if(operator === '*'){
                    isEqual = false;
                }
                console.log(`${operator} `);
            }else{
                fin = operate(parseFloat(firstOperand),operator,parseFloat(secondOperandTemp),isEqual);
                console.log(`== ${fin}`);
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
                console.log('false');
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
}

// // operate(2,2,'+');
// console.log(operate(2,'+',2));