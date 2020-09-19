let num1 = 0;
let num2 = 0;
let sum = 0;
let value = 0;
let array = [];
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


//buttons.forEach(button => button.addEventListener("click", getButton));

/*
function getButton(e){
    button = e.target;
}
*/

//Adds onClick event, which displays which number is pressed
numbers.forEach(a => a.addEventListener("click", display))

//Add onClick event to the buttons
c.addEventListener("click", clean)
div.addEventListener("click", divide)
x.addEventListener("click", multiply)
sub.addEventListener("click", subtract)
addi.addEventListener("click", add)
eq.addEventListener("click", operate(num1,num2,operation))

//Displays which numbers have been pressed

//Every button has the display function now, which causes
// Every button pressed to display in the display field
function display(button){
    /*
    let numberValue = document.getElementById(event.target.id)
    stringValue += parseInt(numberValue.innerHTML)
    value = stringValue;
    calc.innerHTML += numberValue.innerHTML
    */
    let numberValue = button.target.value
    
    array.push(numberValue)
    num1 = array.join("") //numberValue
    calc.innerHTML += numberValue
    console.log(array3)
}



//Maybe make a function which updates the display, differentiate between
//input and display

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
    calc.innerHTML += " + "

    if(array3[0]&&array3[1]){
        array3[0]=array3[0]+array3[1]
    }

    if(array3[0]){
        array3[1]=num1;
    }else{
        array3[0] = num1;
    }

    array = [];
    
    console.log(array3)
    
    //calc.innerHTML = result;

    /*
    operation = "add"
    array.push(value)
    value = 0;
    stringValue = "";
    calc.innerHTML += " + "
    */
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

let u = [4,4,0]
let t = u[0]
let k = u[1]
let s = t+k;
u[2] = s
console.log(u)
//let sum = u.reduce((total, current) => total * current)
//console.log(u)
