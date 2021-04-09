var buttons = document.getElementsByClassName('button');
var display = document.getElementById('calculator-display');

var operand1 = 0;
var operand2 = null;
var operator = null;

function calculatorLogic(){
    var value = this.getAttribute('value');
    var text = display.textContent.trim();


    if(value == '+' || value == '-' || value == '*' || value == "/"){
        operator = value;
        operand1 = parseFloat(text);
        display.textContent = "";
    }

    else if (value == "sign-change"){
        operand1 = parseFloat(text);
        operand1 = -1 * operand1;
        display.textContent = operand1;
    }

    else if (value == "ac"){
        display.textContent = "";
    }

    else if (value == "."){
        if(text.length != 0 && !text.includes(".")){
            display.textContent = text + ".";
        }
    }

    else if (value == "%"){
        operand1 = parseFloat(text);
        operand1 = operand1/100;
        display.textContent = operand1;
    }

    else if (value == "="){
        operand2 = parseFloat(text);
        var result = eval(operand1 + '' + operator + '' + operand2);
        if(result){
            display.textContent = result;
            operand1 = result;
            operand2 = null;
            operator = null;
        }
    }

    else {
        display.textContent += value;
    }
}


for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', calculatorLogic);
}