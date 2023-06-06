var operator = "";
var num1 = 0;
var num2 = 0;

//gets the display head
const display = document.getElementById("DSPN");


//sets the event listeners for the number buttons
const numbers = document.querySelector(".numbers");
const numberButtons = numbers.querySelectorAll("button");
numberButtons.forEach((button) => {

    button.addEventListener('click', () => {
        numberFunc(button.innerHTML);
    });
 });

 //sets the event listeners for the operator buttons
const operators = document.querySelector(".operators");
const operatorButtons = operators.querySelectorAll("button");
operatorButtons.forEach((button) => {

    button.addEventListener('click', () => {
        operatorFunc(button.innerHTML);
    });
 });

//function for when an operator is pushed
function operatorFunc(op){
    if(op === "="){
        num2 = display.innerHTML;
        calculate();
    }
    else{
        operator = op;
        num1 = display.innerHTML;
        display.innerHTML = ""
    }
}

//function for when a number is clicked
function numberFunc(numb){
    if(numb === "CE"){
        clear();
    }
    else{
    display.innerHTML = (display.innerHTML + numb);
    }
}

//function for when the = sign is clicked
function calculate(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if(operator === "+"){
        display.innerHTML = num1 + num2;
    }
    else if(operator === "-"){
        display.innerHTML = num1 - num2;
    }
    else if(operator === "/"){
        display.innerHTML = num1 / num2;
    }
    else if(operator === "x"){
        display.innerHTML = num1 * num2;
    }
    num1 = display.innerHTML;
    num2 = ""
    op = ""

}

//clears the board
function clear(){
    display.innerHTML = "";
    operator = "";
    num1 = 0;
    num2 = 0;
}
