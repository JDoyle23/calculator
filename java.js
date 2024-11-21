//functions to ensure it can do basic operations
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
  if (num2 === 0) {
    alert("Do not divide by 0!")
    return 0;
  }
  let result = num1/num2;
  return result;
}

//declare variables to call elements
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".gridbox");
const operators = document.querySelectorAll(".gridbox-operator")
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
let firstNumber = [];
let secondNumber = [];
let op = [];
let arrayTrigger = 0;
let result;
let prevResult = [];

//create new function operate that takes the above + calls operator on the numbers
const operate = firstNumber => operator => secondNumber => {switch(operator) {
  case '+': return addition(firstNumber,secondNumber);
  case '-': return subtraction(firstNumber,secondNumber);
  case '/': return division(firstNumber,secondNumber);
  case '*': return multiplication(firstNumber,secondNumber);
  default: return 'Invalid operation'
}}

//function to create array for first and second number
function createArray(arr, num) {
  arr.push(num);
  return arr;
}

//clear the display function
function clearDisplay() {
  display.value = "";
}

//function to increment the array trigger
function incrementArrayTrigger() {
  arrayTrigger++;
}

//function to clear the array variables
function clearArray(arr) {
  arr.length = 0;
  return arr;
}

//function to return the array trigger to 0
function returnToDefault() {
  arrayTrigger = 0;
  return arrayTrigger;
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

//function to append number or symbol to display
function appendtoDisplay(input) {
  display.value += input;
}

Array.prototype.forEach.call(numbers,(number) => {
  number.addEventListener("input", () => {
  if (arrayTrigger % 2 === 0) {
    numbers.disabled = true;
  } else {
    numbers.disabled = false;
  }
})
})

//makes number buttons work
Array.prototype.forEach.call(numbers,(number) => {
  number.addEventListener("click", () => {
    //creates array depending on what has been pressed
    if (arrayTrigger === 0) {
      display.value += number.innerText;
      createArray(firstNumber, number.innerText);
      console.log(firstNumber);
    } else if (arrayTrigger % 2 != 0) {
      display.value += number.innerText;
      createArray(secondNumber, number.innerText);
      console.log(secondNumber);
    }
  })
})

//makes operator buttons work
Array.prototype.forEach.call(operators,(operator) => {
  operator.addEventListener("click", () => {
    display.value += operator.innerText;
    createArray(op, operator.innerText);
    console.log(op);
    if (op.length > 1) {
      clearDisplay();
      display.value += "Invalid Operation"
    }
    incrementArrayTrigger();
  })
})

//make clear button work
clear.addEventListener('click', function () {
  returnToDefault();
  clearDisplay();
  clearArray(firstNumber);
  clearArray(secondNumber);
  clearArray(op);
  prevResult = [];
})

equals.addEventListener('click', function () {
  clearDisplay();
  incrementArrayTrigger();
  if (prevResult.length === 0) {
    let num1 = convertToNumber(firstNumber);
    let num2 = convertToNumber(secondNumber);
    let opString = convertToString(op);
    result = operate(num1)(opString)(num2);
    prevResult = result;
    appendtoDisplay(result);
  } else {
    let num1 = prevResult;
    let num2 = convertToNumber(secondNumber);
    let opString = convertToString(op);
    result = operate(num1)(opString)(num2);
    prevResult = result;
    appendtoDisplay(result);
  }
  console.log("Array Trigger:" + arrayTrigger);
  console.log(result)
  clearArray(secondNumber);
  clearArray(op);
  return prevResult;
});

console.log(prevResult)