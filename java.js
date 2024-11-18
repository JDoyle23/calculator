//add function
const addition = function (num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(addition(14,16));
//subtract function
const subtraction = function(num1, num2) {
    let result = num1 - num2;
    return result;
}

console.log(subtraction(13,7));
//multiply function
const multiplication = function(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiplication(13,7));
//divide function
const division = function (num1, num2) {
    let result = num1/num2;
    return result;
}

console.log(division(4,2));

//create variables for number, operator and another number
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

//create new function operate that takes the above + calls operator on the numbers
const operate = firstNumber => operator => secondNumber => {switch(operator) {
    case '+': return addition(firstNumber,secondNumber);
    case '-': return subtraction(firstNumber,secondNumber);
    case '/': return division(firstNumber,secondNumber);
    case '*': return multiplication(firstNumber,secondNumber);
    default: return 'Invalid operation'
  }}

  console.log(operate(12)('+')(8));

  //create a variable to get the numbers by ID.
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const divide = document.getElementById("4");
const four = document.getElementById("5");
const five = document.getElementById("6");
const six = document.getElementById("7");
const times = document.getElementById("8");
const seven = document.getElementById("9");
const eight = document.getElementById("10");
const nine = document.getElementById("11");
const minus = document.getElementById("12");
const zero = document.getElementById("13");
const clear = document.getElementById("14");
const equals = document.getElementById("15");
const add = document.getElementById("16");
const display = document.getElementById("display");

function appendtoDisplay(input) {
    display.innerHTML += input;
}

function clearDisplay() {
    display.innerHTML = "";
}

//add event listener to show the number on the display s
one.addEventListener('click', function () {
  appendtoDisplay("1");
});

two.addEventListener('click', function() {
    appendtoDisplay("2");
});

three.addEventListener('click', function () {
    appendtoDisplay("3");
  });

divide.addEventListener('click', function () {
  appendtoDisplay("%");
});

four.addEventListener('click', function () {
    appendtoDisplay("4");
  });
  
five.addEventListener('click', function () {
    appendtoDisplay("5");
  });

six.addEventListener('click', function () {
    appendtoDisplay("6");
  });

times.addEventListener('click', function () {
    appendtoDisplay("X");
  });

seven.addEventListener('click', function () {
    appendtoDisplay("7");
  });
  
eight.addEventListener('click', function() {
      appendtoDisplay("8");
  });
  
nine.addEventListener('click', function () {
      appendtoDisplay("9");
    });
  
minus.addEventListener('click', function () {
    appendtoDisplay("-");
  });
  
zero.addEventListener('click', function () {
      appendtoDisplay("0");
    });
    
equals.addEventListener('click', function () {
      appendtoDisplay("=");
    });
  
add.addEventListener('click', function () {
      appendtoDisplay("+");
    });

clear.addEventListener('click', function () {
    clearDisplay();
})