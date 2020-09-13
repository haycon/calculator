
let value = 0;
let array = [];
let stringValue = "";
let buttonPressed = "";
let calc = document.getElementById("calculation")
let buttons = document.querySelectorAll(".numbers")
let c = document.querySelector("#c")
let div = document.querySelector("#div")
let x = document.querySelector("#x")
let sub = document.querySelector("#sub")
let addi = document.querySelector("#addi")
let eq = document.querySelector("#eq")

//I probably need to find a better way to set up this calculator
//I fix some of the problems with setting the value = 0
//Not clean code


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
    array = []
}

//Under are the operation functions
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

function multiply(arr){
    buttonPressed = "multiply"
    //Suspect there is a better way to solve this
    if(value != 0){
        array.push(value)
    }
    value = 0;
    stringValue = "";
    calc.innerHTML += " * "
}

function divide(arr){
    buttonPressed = "divide"
    if(value != 0){
        array.push(value)
    }
    value = 0;
    stringValue = "";
    calc.innerHTML += " / "
}

//Runs the operation that is pressed
//Should there be arguments to this function? operate(operator, numbers)
function operate(){
    console.log(array)
    if(buttonPressed == "add"){
        array.push(value)
        let sum = array.reduce((total, current) => total + current, 0)
        calc.innerHTML = sum
        //"Workaround", now a 0 gets pushed into the array, not a problem, but not elegant
        value = 0
    }

    if(buttonPressed == "subtract"){
        array.push(value)
        let sum = array[0]
        for(i=1; i<array.length; i++){
            sum -= array[i]
        }
        calc.innerHTML = sum
        value=0
    }

    if(buttonPressed == "divide"){
        array.push(value)
        let sum = array.reduce((total, current) => total / current)
        calc.innerHTML = sum
        value = 0
    }

    if(buttonPressed == "multiply"){
        array.push(value)
        let sum = array.reduce((total, current) => total * current)
        calc.innerHTML = sum
        value = 0
    }

}
/*
let u = [4,2]

let sum = u.reduce((total, current) => total * current)
console.log(sum)
*/