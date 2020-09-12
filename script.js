
let value = 0;
let stringValue = "";
let array = [];
let buttonPressed = "";
let calc = document.getElementById("calculation")

//Shows numbers when pressing the buttons
function display(){

    let text = document.getElementById(event.target.id)
    
    stringValue += parseInt(text.innerHTML)
    value = parseInt(stringValue)
    calc.innerHTML += text.innerHTML
}

//Pushes numbers into an array
function add(arr){
    buttonPressed = "add"
    array.push(value)

    value = 0;
    stringValue = "";

    calc.innerHTML += " + "
}

function add2 (a,b) {
	let sum = 0;
	sum += a + b;
	return sum;
}

function subtract(arr){
    return arr.reduce((total, current) => total - current, 0)
}

function subtract2 (a,b) {
	let sum = 0;
	sum += a - b;
	return sum;
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

//Runs the operation that is pressed
function operate(){
    
    if(buttonPressed == "add"){
        array.push(value)
        let sum = array.reduce((total, current) => total + current, 0)
        calc.innerHTML = sum
    }
}
