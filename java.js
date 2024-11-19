//add function
const addition = function (num1, num2) {
    let result = num1 + num2;
    return result;
}
//subtract function
const subtraction = function(num1, num2) {
    let result = num1 - num2;
    return result;
}
//multiply function
const multiplication = function(num1, num2) {
    let result = num1 * num2;
    return result;
}
//divide function
const division = function (num1, num2) {
    let result = num1/num2;
    return result;
}
//create variables for number, operator and another number
let firstNumber = [];
let secondNumber = [];
let operator = [];

//create new function operate that takes the above + calls operator on the numbers
const operate = firstNumber => operator => secondNumber => {switch(operator) {
    case '+': return addition(firstNumber,secondNumber);
    case '-': return subtraction(firstNumber,secondNumber);
    case '/': return division(firstNumber,secondNumber);
    case '*': return multiplication(firstNumber,secondNumber);
    default: return 'Invalid operation'
  }}
//create a variable to get the numbers by ID & initialise arrayTrigger to create numbers
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
const buttons = document.querySelectorAll(".gridbox");
let arrayTrigger = 0;

//function to append number or symbol to display
function appendtoDisplay(input) {
    display.innerHTML += input;
}

//function to clear full display -> will be on AC button
function clearDisplay() {
    display.innerHTML = "";
}

//create array function to make each number
function createArray(arr, num) {
    arr.push(num);
    return arr;
}

//trigger for second array to start being made -> on each symbol
function convertToTrue() {
  arrayTrigger += 1;
}

//function to convert operator array into a string for reading in operate
function convertToString(arr) {
  let convertedArray = arr.join("")
  return convertedArray;
}

function convertToNumber(arr1) {
  let stringArray = arr1.join("");
  let number = stringArray * 1;
  return number;
}

//function to return the array trigger to 0
function returnToDefault() {
  arrayTrigger = 0;
  return arrayTrigger;
}

//function to clear the variable arrays 
function clearArray(arr) {
  arr.length = 0;
  return arr;
}

//add event listener to show the number on the display & create variables
one.addEventListener('click', function () {
  appendtoDisplay("1");
  if (arrayTrigger === 0) {
    createArray(firstNumber, 1);
  } else if (arrayTrigger === 1) {
    createArray(secondNumber, 1);
  }
});



two.addEventListener('click', function() {
    appendtoDisplay("2");
    if (arrayTrigger === 0) {
      createArray(firstNumber, 2);
    } else if (arrayTrigger === 1) {
      createArray(secondNumber, 2);
    }
});

three.addEventListener('click', function () {
    appendtoDisplay("3");
    if (arrayTrigger === 0) {
      createArray(firstNumber, 3);
    } else if (arrayTrigger === 1) {
      createArray(secondNumber, 3);
    }
  });

divide.addEventListener('click', function () {
  appendtoDisplay("/");
  convertToTrue();
  createArray(operator,"/");
});

four.addEventListener('click', function () {
    appendtoDisplay("4");
    if (arrayTrigger === 0) {                                                                                                             
      createArray(firstNumber, 4);
    } else if (arrayTrigger === 1) {
      createArray(secondNumber, 4);
    }
  });
  
five.addEventListener('click', function () {
    appendtoDisplay("5");
    if (arrayTrigger === 0) {
      createArray(firstNumber, 5);
    } else if (arrayTrigger === 1) {
      createArray(secondNumber, 5);
    }
  });

six.addEventListener('click', function () {
    appendtoDisplay("6");
    if (arrayTrigger === 0) {
      createArray(firstNumber, 6);
    } else if (arrayTrigger === 1) {
      createArray(secondNumber, 6);
    }
  });

times.addEventListener('click', function () {
    appendtoDisplay("*");
    convertToTrue();
    createArray(operator,"*");
  });

seven.addEventListener('click', function () {
    appendtoDisplay("7");
    if (arrayTrigger === 0) {
      createArray(firstNumber, 7);
    } else if (arrayTrigger === 1) {
      createArray(secondNumber, 7);
    }
  });
  
eight.addEventListener('click', function() {
      appendtoDisplay("8");
      if (arrayTrigger === 0) {
        createArray(firstNumber, 8);
      } else if (arrayTrigger === 1) {
        createArray(secondNumber, 8);
      }
  });
  
nine.addEventListener('click', function () {
      appendtoDisplay("9");
      if (arrayTrigger === 0) {
        createArray(firstNumber, 9);
      } else if (arrayTrigger === 1) {
        createArray(secondNumber, 9);
      }
    });
  
minus.addEventListener('click', function () {
    appendtoDisplay("-");
    convertToTrue();
    createArray(operator,"-");
  });
  
zero.addEventListener('click', function () {
      appendtoDisplay("0");
      if (arrayTrigger === 0) {
        createArray(firstNumber, 0);
      } else if (arrayTrigger === 1) {
        createArray(secondNumber, 0);
      }
    });
    
equals.addEventListener('click', function () {
      clearDisplay();
      let num1 = convertToNumber(firstNumber);
      let num2 = convertToNumber(secondNumber);
      let op = convertToString(operator);
      let result = operate(num1)(op)(num2);
      appendtoDisplay(result);
    });
  
add.addEventListener('click', function () {
      appendtoDisplay("+");
      convertToTrue();
      createArray(operator,"+");
    });

clear.addEventListener('click', function () {
    clearDisplay();
    returnToDefault();
    clearArray(firstNumber);
    clearArray(secondNumber);
    clearArray(operator);
})