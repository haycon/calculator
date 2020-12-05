let firstArray = [];
let firstNumber = 0;
let secondNumber = 0;
let firstSave = 0;
let operation = '';
let var1 = document.getElementById('firstNum');
let var2 = document.getElementById('firstSave');
let var5 = document.getElementById('num5');
let calc = document.getElementById('calculation');
let numbers = document.querySelectorAll('.numbers');

window.addEventListener('click', () => {
  var1.textContent = `First number ${firstNumber}`;
  var2.innerHTML = `Second number ${secondNumber}`;
  var5.innerHTML = `First save num ${firstSave}`;
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
    firstSave = firstNumber;
  } else {
    firstSave = eq(firstNumber, firstSave, operation);
  }
  operation = 'addition';
  calc.innerHTML += '+';
  firstArray = [];
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
  if (firstSave == 0) {
    firstSave = firstNumber;
  } else {
    firstSave = eq(firstNumber, firstSave, operation);
  }
  operation = 'division';
  calc.innerHTML += '/';
  firstArray = [];
});

let eq = (firstNumber, firstSave, operation) => {
  if (operation == 'addition') {
    return firstNumber + firstSave;
  }
  if (operation == 'subtraction') {
    return firstSave - firstNumber;
  }
  if (operation == 'multiplication') {
    return firstSave * firstNumber;
  }
  if (operation == 'division') {
    return firstSave / firstNumber;
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
    calc.innerHTML = firstSave / firstNumber;
    firstNumber = 0;
  }

  if (operation == 'multiplication') {
    calc.innerHTML = firstSave * firstNumber;
    firstNumber = 0;
  }
});
