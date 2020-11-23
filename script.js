let num1 = 0;
let firstArray = [];
let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');

let var1 = document.getElementById('num1');
let var2 = document.getElementById('num2');

window.addEventListener('click', () => {
  var1.textContent = `${firstNumber}`;
  var2.innerHTML = `${secondNumber}`;
});

numbers.forEach((e) => e.addEventListener('click', display));

function display(e) {
  let buttonValue = parseInt(e.path[0].value);

  firstArray.push(buttonValue);
  firstNumber = parseInt(firstArray.join(''));

  calc.innerHTML += buttonValue;
}

c.addEventListener('click', () => {
  operation = '';
  firstArray = [];
  firstNumber = 0;
  secondArray = [];
  secondNumber = 0;
  calc.innerHTML = '';
});

div.addEventListener('click', () => {});
x.addEventListener('click', () => {});

sub.addEventListener('click', () => {
  operation = 'subtraction';
  calc.innerHTML += '-';
  secondNumber -= firstNumber;
  firstArray = [];
  firstNumber = 0;
});

addition.addEventListener('click', () => {
  operation = 'addition';
  calc.innerHTML += '+';
  secondNumber += firstNumber;
  firstArray = [];
  firstNumber = 0;
});

eq.addEventListener('click', () => {
  if (operation == 'addition') {
    secondNumber += firstNumber;
    calc.innerHTML = secondNumber;
    firstNumber = 0;
  }

  if (operation == 'subtraction') {
    secondNumber += firstNumber;
    calc.innerHTML = secondNumber;
    firstNumber = 0;
  }
});
