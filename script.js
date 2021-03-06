let numbers = document.querySelectorAll('.numbers');
let calc = document.getElementById('calculation');
let var1 = document.getElementById('num1');
let var2 = document.getElementById('num2');
let firstArray = [];
let num1 = 0;
let num2 = 0;
let operation = '';

//Show tmp var and stored var
window.addEventListener('click', () => {
  var1.innerHTML = `First number ${num1}`;
  var2.innerHTML = `Second number ${num2}`;
});

//Onclick for each number
numbers.forEach((e) => e.addEventListener('click', display));

//Adds number into variable and displays when clicked
function display(e) {
  if (Number.isInteger(parseInt(e.toElement.innerHTML))) {
    buttonValue = parseFloat(e.toElement.innerHTML);

    firstArray.push(buttonValue);
    num1 = parseFloat(firstArray.join(''));

    calc.innerHTML += buttonValue;
  } else {
    if (!firstArray.includes('.')) {
      buttonValue = e.toElement.innerHTML;

      firstArray.push(buttonValue);
      num1 = parseFloat(firstArray.join(''));

      calc.innerHTML += buttonValue;
    }
  }
}

//Clear
clear.addEventListener('click', () => {
  operation = '';
  firstArray = [];
  num1 = 0;
  num2 = 0;
  secondSave = 0;
  calc.innerHTML = '';
});

//Undo
undo.addEventListener('click', () => {
  num1 = Math.floor(num1 / 10);
  calc.innerHTML = num1;
});

//Add
addition.addEventListener('click', () => {
  if (num2 == 0) {
    num2 = num1;
  } else {
    num2 = eq(num1, num2, operation);
  }
  operation = 'addition';
  calc.innerHTML += '+';
  firstArray = [];
});

//Subtraction
subtraction.addEventListener('click', () => {
  if (num2 == 0) {
    num2 = num1;
  } else {
    num2 = eq(num1, num2, operation);
  }
  operation = 'subtraction';
  calc.innerHTML += '-';
  firstArray = [];
});

//Multiplication
multiplication.addEventListener('click', () => {
  if (num2 == 0) {
    num2 = num1;
  } else {
    num2 = eq(num1, num2, operation);
  }
  operation = 'multiplication';
  calc.innerHTML += 'x';
  firstArray = [];
});

//Division
division.addEventListener('click', () => {
  if (num2 == 0) {
    num2 = num1;
  } else {
    num2 = eq(num1, num2, operation);
  }
  operation = 'division';
  calc.innerHTML += '/';
  firstArray = [];
});

equals.addEventListener('click', () => {
  calc.innerHTML = eq(num1, num2, operation);
});

let eq = (num1, num2, operation) => {
  if (!num2) {
    return num1;
  }

  if (operation == 'addition') {
    return num1 + num2;
  }
  if (operation == 'subtraction') {
    return num2 - num1;
  }
  if (operation == 'multiplication') {
    return (num2 * num1).toFixed(5);
  }
  if (operation == 'division') {
    if (num1 === 0) {
      return 'You tried to divide by 0';
    }
    return (num2 / num1).toFixed(5);
  }
};

//Todo: Add functionality for + - /
function display2(e) {
  //Could be improved with Regexp
  if (
    Number.isInteger(parseInt(e.key)) ||
    e.key === 'x' ||
    e.key === '.' ||
    e.key === '-' ||
    e.key === '/'
  ) {
    //Improvement: Make a function and reuse it here
    if (e.key === 'x') {
      if (num2 == 0) {
        num2 = num1;
      } else {
        num2 = eq(num1, num2, operation);
      }
      operation = 'multiplication';
      calc.innerHTML += 'x';
      firstArray = [];
    } else {
      buttonValue = parseFloat(e.key);

      firstArray.push(buttonValue);
      num1 = parseFloat(firstArray.join(''));

      calc.innerHTML += buttonValue;
    }
  }
}

window.addEventListener('keydown', display2);
