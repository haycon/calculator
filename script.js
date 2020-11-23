let num1 = 0;
let firstArray = [];
let firstNumber = 0;
let secondArray = [];
let secondNumber = 0;

let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');

let counter = 0;
let operation = '';

numbers.forEach((e) => e.addEventListener('click', display));

//Add onClick event to the buttons

//Try to do this DRY
c.addEventListener('click', clean);
div.addEventListener('click', divide);
x.addEventListener('click', multiply);
sub.addEventListener('click', subtract);
addi.addEventListener('click', add);
eq.addEventListener('click', equals);

function display(e) {
  let buttonValue = parseInt(e.path[0].value);

  firstArray.push(buttonValue);
  firstNumber = parseInt(firstArray.join(''));

  calc.innerHTML += buttonValue;
}

function clean() {
  firstArray = [];
  firstNumber = 0;
  secondArray = [];
  secondNumber = 0;
  calc.innerHTML = '';
}

function add() {
  operation = 'add';
  calc.innerHTML += '+';
  secondNumber += firstNumber;
  firstArray = [];
  firstNumber = 0;
  console.log(secondNumber);
}

function subtract() {
  operation = 'subtract';
}

function multiply() {
  operation = 'multiply';
}

function divide() {
  operation = 'divide';
}

//Working on this function
function equals() {
  secondNumber += firstNumber;
  calc.innerHTML = secondNumber;
}
