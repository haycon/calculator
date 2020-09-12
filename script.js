
let value = 0;
let stringValue = "";
let array = [];
let buttonPressed = "";


function display(){

    let text = document.getElementById(event.target.id)
    let calc = document.getElementById("calculation")
    
    stringValue += text.innerHTML
    value = Number(stringValue)
    calc.innerHTML += text.innerHTML
    console.log(value)
}

function add(arr){
    buttonPressed = "add"
    array.push(value)
    console.log(array)
    return arr.reduce((total, current) => total + current, 0)
}

function subtract(arr){
    return arr.reduce((total, current) => total - current, 0)
}

function multiply(arr){
    return arr.length 
    ? arr.reduce((total, current) => total * current)
    : 0;
}

function divide(arr){
    return arr.length 
    ? arr.reduce((total, current) => total / current)
    : 0;
}


function add (a,b) {
	let sum = 0;
	sum += a + b;
	return sum;
}

function subtract (a,b) {
	let sum = 0;
	sum += a - b;
	return sum;
}


function sum (array) {
	return array.reduce((total,current) => total+current,0);
}


function multiply (array) {
	return array.reduce((a,b) => a*b);
}

//Does this function need to have inputs?
function operate(operator,num1,num2){
    
    //if(buttonPressed == "add"){
    //    add()
    //}

    console.log("hello")
}


let a = [2,1]

console.log(add(a))