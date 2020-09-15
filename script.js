let num1 = 0;
let num2 = 0;
let sum = 0;
let value = 0;
let array = [];
let stringValue = "";
let operation = "";
let calc = document.getElementById("calculation");
let numbers = document.querySelectorAll(".numbers");
let c = document.querySelector("#c")
let div = document.querySelector("#div")
let x = document.querySelector("#x")
let sub = document.querySelector("#sub")
let addi = document.querySelector("#addi")
let eq = document.querySelector("#eq")

//buttons.forEach(button => button.addEventListener("click", getButton));

/*
function getButton(e){
    button = e.target;
}
*/

console.log(numbers)

//Adds onClick event, which displays which number is pressed
numbers.forEach(a => addEventListener("click", display))

//Add onClick event to the buttons
c.addEventListener("click", clean)
div.addEventListener("click", divide)
x.addEventListener("click", multiply)
sub.addEventListener("click", subtract)
addi.addEventListener("click", add)
eq.addEventListener("click", operate(num1,num2,operation))

//Displays which numbers have been pressed

//Every button has the display function now, which causes
// Every button pressed to display in the displayfield
function display(){
    //change name of variable
    let numberValue = document.getElementById(event.target.id)
    stringValue += parseInt(numberValue.innerHTML)
    value = parseInt(stringValue)
    calc.innerHTML += numberValue.innerHTML
}

//A try to shorten the display function, still working here
function updateDisplay(number){
    text.innerHTML = x;
}

//Clears the values and the display screen
function clean(){
    calc.innerHTML = " "
    value = 0;
    stringValue = ""
    array = []
}

//Under are the operation functions
function add2(a,b){
    let ans = a+b;
    console.log(ans)
}

function add(){
    operation = "add"
    array.push(value)
    value = 0;
    stringValue = "";
    //calc.innerHTML += " + "
}

function subtract(){
    operation = "subtract"
    array.push(value)
    value = 0;
    stringValue = "";
    calc.innerHTML += " - "
}

function multiply(arr){
    operation = "multiply"
    //Suspect there is a better way to solve this
    if(value != 0){
        array.push(value)
    }
    value = 0;
    stringValue = "";
    calc.innerHTML += " * "
}

function divide(arr){
    operation = "divide"
    if(value != 0){
        array.push(value)
    }
    value = 0;
    stringValue = "";
    calc.innerHTML += " / "
}

//Runs the operation that is pressed
//Should there be arguments to this function? operate(operator, numbers)
function operate(num1,num2,operation){
    if(operation == "add"){
        array.push(value)
        
        calc.innerHTML = sum
        //"Workaround", now a 0 gets pushed into the array, not a problem, but not elegant
        value = 0
    }

    if(operation == "subtract"){
        array.push(value)
        let sum = array[0]
        for(i=1; i<array.length; i++){
            sum -= array[i]
        }
        calc.innerHTML = sum
        value=0
    }

    if(operation == "divide"){
        array.push(value)
        let sum = array.reduce((total, current) => total / current)
        calc.innerHTML = sum
        value = 0
    }

    if(operation == "multiply"){
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