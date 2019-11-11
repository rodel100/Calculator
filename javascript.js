let operator = "";
let displayvalue = "";
function add(a,b){
    return(Number(a)+Number(b))
}
function subtraction(a,b){
    return(a-b)
}
function multiplication(a,b){
    return(a*b)
}
function division(a,b){
    return(a/b)
}

function operate(number, operator, number2){
    switch(operator){
    case ("+") :
    return add(number, number2)
    break;
    case ("-") :
    return subtraction(number, number2)
    break;
    case ("*") :
    return multiplication(number, number2)
    break
    case ("/") :
    return division(number, number2)
}}
function decimalfunction(){
    let display = document.querySelector(".results")
    let decimalbutton = document.querySelector(".decimal")
    decimalbutton.addEventListener("click", (e) =>{
        if([...display.innerHTML].includes(".")){
            return ""
        }
        else {return display.innerHTML += decimalbutton.innerHTML}
    })
}
function buttonsfunctions(){
    let display = document.querySelector(".results")
    let numButtons = document.querySelectorAll(".numbers")
    numButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            return display.innerHTML += button.innerHTML
        })
    })
}
function operatorfunctions(){
    let display = document.querySelector(".results")
    let operatorButtons = document.querySelectorAll(".operators")
    operatorButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            if(operator == ""){
            displayvalue = display.innerHTML
            operator = button.innerHTML
            display.innerHTML = ""
            console.log(displayvalue, operator)}
            else {
                displayvalue = operate(displayvalue, operator, display.innerHTML);
                display.innerHTML = "";
                operator = button.innerHTML
                }
        })
    })
}
function evaluate(){
    let equalButton = document.querySelector(".evaluate")
    let display = document.querySelector(".results") 
    equalButton.addEventListener("click", (e) =>{
    let results = operate(displayvalue, operator, display.innerHTML)
    if(results == Infinity){
        display.innerHTML = "Can't do that now"}
    else {display.innerHTML = Math.round(results*100000)/100000}
    })
}
function clear(){
    let clearbutton = document.querySelector(".clear")
    let display = document.querySelector(".results") 
    clearbutton.addEventListener("click", (e) =>{
        operator = ""
        displayvalue = ""
        display.innerHTML = ""
    })
}
function backspace(){
    let display = document.querySelector(".results")
    let button = document.querySelector(".backspace")
    button.addEventListener("click", (e) => {
    if(display.innerHTML == ""){
        console.log(1)
    }
    else{display.innerHTML = display.innerHTML.slice(0, -1)}
    })}

function main(){
    let display = document.querySelector(".results") 
    buttonsfunctions();
    operatorfunctions();
    evaluate();
    clear();
    if(display.innerHTML == Infinity){
        display.innerHTML = "Can't do that now"
    }
    backspace()
    decimalfunction()
}

main();