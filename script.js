let num1 = 0;
let firstArray = [];
let firstNumber = 0;
let secondArray = [];
let secondNumber = 0;

let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');

let var1 = document.getElementById('num1');
let var2 = document.getElementById('num2');

window.addEventListener('click', () => {
  var1.textContent = `${firstNumber}`;
  var2.innerHTML = `${secondNumber}`;
});

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

function clean() {
  operation = '';
  firstArray = [];
  firstNumber = 0;
  secondArray = [];
  secondNumber = 0;
  calc.innerHTML = '';
}

function display(e) {
  let buttonValue = parseInt(e.path[0].value);

  firstArray.push(buttonValue);
  firstNumber = parseInt(firstArray.join(''));

  calc.innerHTML += buttonValue;
}

function add() {
  operation = 'addition';
  calc.innerHTML += '+';
  secondNumber += firstNumber;
  firstArray = [];
  firstNumber = 0;
}

function subtract() {
  operation = 'subtraction';
  calc.innerHTML += '-';
  secondNumber -= firstNumber;
  firstArray = [];
  firstNumber = 0;
}

function multiply() {
  operation = 'multiplication';
}

function divide() {
  operation = 'division';
}

//Working on this function
function equals() {
  if (operation == 'addition') {
    secondNumber += firstNumber;
    /*     if (firstNumber == 0) {
      calc.innerHTML = firstNumber;
    } */
    calc.innerHTML = secondNumber;
    firstNumber = 0;
  }

  if (operation == 'subtraction') {
    secondNumber += firstNumber;
    calc.innerHTML = secondNumber;
  }
}
