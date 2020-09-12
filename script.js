
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

//Clears the values and the display screen
function clear(){
    console.log("hello")
    calc.innerHTML += "x"
    value = 0;
    stringValue = ""
}

//Pushes numbers into an array
function add(){
    buttonPressed = "add"
    array.push(value)

    value = 0;
    stringValue = "";

    calc.innerHTML += " + "
}

function subtract(arr){
    buttonPressed = "subtract"
    array.push(value)

    value = 0;
    stringValue = "";

    calc.innerHTML += " - "
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
//Should there be arguments to this function? operate(operator, numbers)
function operate(){
    
    if(buttonPressed == "add"){
        array.push(value)
        let sum = array.reduce((total, current) => total + current, 0)
        calc.innerHTML = sum
    }

    if(buttonPressed == "subtract"){
        array.push(value)
        let sum = array.reduce((total, current) => total - current, 0)
        calc.innerHTML = sum
    }

}
