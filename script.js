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

//Adds number into variable when clicked
function display(e) {
  /*   if (Number.isInteger(parseInt(e.toElement.innerHTML))) {
  } else {
  }
  trying to store float numbers into array 
  */
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
