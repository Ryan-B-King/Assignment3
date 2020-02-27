let num1;
let num2;
let operation;
let result;
let keepCalculating;

function displayTitle() {
    "use strict";
    window.alert("Activating Calculator...");
}

function calculate (num1, num2, operation) {
    "use strict";
    switch(operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            window.alert("An error has occurred.");
    }
    window.alert("The result of " + num1 + " " + operation + " " + num2 + " equals " + result + ".");
}

function useCalculator() {

num1 = parseFloat(window.prompt("Input your first numeric value.", "0-9"));

if (isNaN(num1)){

}


num2 = parseFloat(window.prompt("Input your second number value.", "0-9"));
operation = window.prompt("Type out which operation you would like to perform?", "+, -, *, or /");




calculate (num1, num2, operation);
}





function main() {
    "use strict";
    displayTitle();
    let keepCalculating = "y";
    while (keepCalculating === "y") {
        useCalculator();
        keepCalculating = window.prompt("Want to calculate more (y/n)?");
        while (keepCalculating !== "y" && keepCalculating !== "n") {
            keepCalculating = window.prompt("Want to calculate more (y/n)?");
        }
    }
    window.alert("Decativating Calculator...");
}
main();
