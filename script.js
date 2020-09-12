
let value = 0;
let stringValue = "";
let array = [];
let buttonPressed = "";
let calc = document.getElementById("calculation")
let buttons = document.querySelectorAll(".numbers")
let c = document.querySelector("#c")
let div = document.querySelector("#div")
let x = document.querySelector("#x")
let sub = document.querySelector("#sub")
let addi = document.querySelector("#addi")
let eq = document.querySelector("#eq")

//Goes through the numbers and adds the display function to the numbers
for (let btn of buttons){
    btn.addEventListener("click", display)
}

//Add onClick event to the buttons
c.addEventListener("click", clean)
div.addEventListener("click", divide)
x.addEventListener("click", multiply)
sub.addEventListener("click", subtract)
addi.addEventListener("click", add)
eq.addEventListener("click", operate)

//Shows numbers when pressing the buttons
function display(){

    let text = document.getElementById(event.target.id)
    
    stringValue += parseInt(text.innerHTML)
    value = parseInt(stringValue)
    calc.innerHTML += text.innerHTML
}

//Clears the values and the display screen
function clean(){
    calc.innerHTML = " "
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

function subtract(){
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
    return array.length 
    ? array.reduce((total, current) => total * current)
    : 0;
}

function divide(arr){
    buttonPressed = "divide"
    array.push(value)

    value = 0;
    stringValue = "";

    calc.innerHTML += " / "
    ? array.reduce((total, current) => total / current)
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
        let sum = array[0]
        for(i=1; i<array.length; i++){
            sum -= array[i]
        }
        calc.innerHTML = sum
    }

}

