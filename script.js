let num1 = 0;
let num2 = 0;
let sum = 0;
let value = 0;
let array = [0];
let array2 = []
let array3 = [];
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


//Adds onClick event, which displays which number is pressed
numbers.forEach(a => a.addEventListener("click", display))

//Add onClick event to the buttons
c.addEventListener("click", clean)
div.addEventListener("click", divide)
x.addEventListener("click", multiply)
sub.addEventListener("click", subtract)
addi.addEventListener("click", add)
eq.addEventListener("click", equals)

//Displays which numbers have been pressed
function display(button){
    let numberValue = button.target.value
    array[0] += numberValue
    array[0] = parseInt(array[0])
    //num1 = array.join("") //numberValue
    calc.innerHTML += numberValue
}

//Clears the values and the display screen
function clean(){
    calc.innerHTML = " "
    array = [0]
    array2 = [0]
    console.log("array " + array)
    console.log("array2 "+ array2)
}

//Under are the operation functions
function add(){
    operation = "add"
    calc.innerHTML += " + "

    if(array2[0]&&array[0]){
        let sum = array2[0]+array[0]
        console.log(sum)
        array2[0]=array2[0]+array[0]
    }

    array2.push(array[0])
    
    console.log("array2 " + array2[0]) 
}

function subtract(){
    operation = "subtract"

    calc.innerHTML += " - "
    array2[0] -= array[0]
    console.log(array2)
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

//Working on this function
function equals(){
    if(operation = "add"){
        let sum = array2[0]+array[0]
        array = [0]
        calc.innerHTML = sum
        console.log("array2 " + array2[0])
        console.log("array " + array[0])
    }

    if(operation = "subtraction"){
        let sum = array2[0]-array[0]
        calc.innerHTML = sum
    }
    
}

//Runs the operation that is pressed
function operate(){

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

//let sum = u.reduce((total, current) => total * current)
//console.log(u)
