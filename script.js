let num1 = 0;
let firstArray = [];
let firstNumber = 0;
let secondNumber = 0;
let firstSave = 0;
let secondSave = 0;
let divNumber = 0;
let multNumber = 0;
let operation = '';
let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');

let var1 = document.getElementById('num1');
let var2 = document.getElementById('num2');
let var3 = document.getElementById('num3');
let var4 = document.getElementById('num4');
let var5 = document.getElementById('num5');
let var6 = document.getElementById('num6');

window.addEventListener('click', () => {
  var1.textContent = `First number ${firstNumber}`;
  var2.innerHTML = `Second number ${secondNumber}`;
  var3.innerHTML = `Div number ${divNumber}`;
  var4.innerHTML = `Mult number ${multNumber}`;
  var5.innerHTML = `First save num ${firstSave}`;
  var6.innerHTML = `Second save num ${secondSave}`;
});

numbers.forEach((e) => e.addEventListener('click', display));

//Adds number into variable when clicked
function display(e) {
  let buttonValue = parseFloat(e.path[0].value);

  firstArray.push(buttonValue);
  firstNumber = parseFloat(firstArray.join(''));

  calc.innerHTML += buttonValue;
}

//Clear
clear.addEventListener('click', () => {
  operation = '';
  firstArray = [];
  firstNumber = 0;
  secondNumber = 0;
  firstSave = 0;
  secondSave = 0;
  calc.innerHTML = '';
});

addition.addEventListener('click', () => {
  if (firstSave == 0) {
    firstSave += firstNumber;
  } else {
    firstSave = eq(firstNumber, secondNumber, operation);
  }
  operation = 'addition';
  calc.innerHTML += '+';
  secondNumber = firstNumber;
  firstArray = [];
  firstNumber = 0;
});

subtraction.addEventListener('click', () => {
  if (firstSave == 0) {
    firstSave = firstNumber;
  } else {
    firstSave = eq(firstNumber, firstSave, operation);
  }
  operation = 'subtraction';
  calc.innerHTML += '-';

  firstArray = [];
});

multiplication.addEventListener('click', () => {
  if (firstSave == 0) {
    firstSave = firstNumber;
  } else {
    firstSave = eq(firstNumber, firstSave, operation);
  }
  operation = 'multiplication';
  calc.innerHTML += 'x';
  firstArray = [];
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

let eq = (num1, num2, operation) => {
  if (operation == 'addition') {
    return num1 + num2;
  }
  if (operation == 'subtraction') {
    return num2 - num1;
  }
  if (operation == 'multiplication') {
    return num2 - num1;
  }
  if (operation == 'division') {
    return num2 - num1;
  }
};

equals.addEventListener('click', () => {
  if (operation == 'addition') {
    secondNumber = firstNumber;
    calc.innerHTML = firstSave + firstNumber;
    firstNumber = 0;
  }

  if (operation == 'subtraction') {
    calc.innerHTML = firstSave - firstNumber;
    firstNumber = 0;
  }

  if (operation == 'division') {
    secondNumber = divNumber / firstNumber;
    calc.innerHTML = secondNumber;
    firstNumber = 0;
    divNumber = 0;
  }

  if (operation == 'multiplication') {
    calc.innerHTML = firstSave * firstNumber;
    firstNumber = 0;
    multNumber = 0;
  }
});
