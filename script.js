let num1 = 0;
let firstArray = [];
let firstNumber = 0;
let secondNumber = 0;
let divNumber = 0;
let multNumber = 0;
let operation = '';
let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');

let var1 = document.getElementById('num1');
let var2 = document.getElementById('num2');
let var3 = document.getElementById('num3');
let var4 = document.getElementById('num4');

window.addEventListener('click', () => {
  var1.textContent = `${firstNumber}`;
  var2.innerHTML = `${secondNumber}`;
  var3.innerHTML = `${divNumber}`;
  var4.innerHTML = `${multNumber}`;
});

numbers.forEach((e) => e.addEventListener('click', display));

function display(e) {
  let buttonValue = parseFloat(e.path[0].value);

  firstArray.push(buttonValue);
  firstNumber = parseFloat(firstArray.join(''));

  if (operation == 'division') {
  }

  calc.innerHTML += buttonValue;
}

clear.addEventListener('click', () => {
  operation = '';
  firstArray = [];
  firstNumber = 0;
  secondArray = [];
  secondNumber = 0;
  divNumber = 0;
  multNumber = 0;
  calc.innerHTML = '';
});

division.addEventListener('click', () => {
  operation = 'division';
  calc.innerHTML += '/';
  if (firstNumber != 0) {
    divNumber = firstNumber;
  } else {
    divNumber = secondNumber;
  }
  firstArray = [];
  firstNumber = 0;
});

multiplication.addEventListener('click', () => {
  operation = 'multiplication';
  calc.innerHTML += 'x';
  multNumber = firstNumber;
  firstArray = [];
  firstNumber = 0;
});

subtraction.addEventListener('click', () => {
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

equals.addEventListener('click', () => {
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

  if (operation == 'division') {
    secondNumber = divNumber / firstNumber;
    calc.innerHTML = secondNumber;
    firstNumber = 0;
    divNumber = 0;
  }

  if (operation == 'multiplication') {
    if (secondNumber == 0) {
      secondNumber = firstNumber * multNumber;
    } else {
      secondNumber = secondNumber * firstNumber;
    }
    calc.innerHTML = secondNumber;
    firstNumber = 0;
    multNumber = 0;
  }
});
