let num1 = 0;

let stringValue = '';
let operation = '';

//Maybe I don' need to create these variables at all?
let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');
let c = document.querySelector('#c');
let div = document.querySelector('#div');
let x = document.querySelector('#x');
let sub = document.querySelector('#sub');
let addi = document.querySelector('#addi');
let eq = document.querySelector('#eq');

//Adds onClick event, which displays which number is pressed
numbers.forEach((a) => a.addEventListener('click', display));

//Add onClick event to the buttons

//Try to do this DRY
c.addEventListener('click', clean);
div.addEventListener('click', divide);
x.addEventListener('click', multiply);
sub.addEventListener('click', subtract);
addi.addEventListener('click', add);
eq.addEventListener('click', equals);

//Displays which numbers have been pressed
function display(button) {}

//Clears the values and the display screen
function clean() {}

//Under are the operation functions
function add() {
  operation = 'add';
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
  if ((operation = 'add')) {
  }
}
