// GLOBAL VARIABLES
let num1;
let num2;
let operation;
let result;
let keepCalculating;

// FUNCTION TO DISPLAY STARTING ALERT
function displayTitle() {
    "use strict";
    window.alert("Activating Calculator...");
}

// FUNCTION TO RUN CALCULATIONS
function calculate(num1, num2, operation) {
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

// FUNCTION TO TAKE USER INPUT AND VALIDATE & CALLS CALCULATE()
function useCalculator() {
    "use strict";

    num1 = parseFloat(window.prompt("Input your first numeric value.", "0-9"));

    if (isNaN(num1)){
        while (isNaN(num1)) {
            window.alert("You've input an incorrect value.")
            num1 = parseFloat(window.prompt("Input your first numeric value.", "0-9"));
        }
    }

    num2 = parseFloat(window.prompt("Input your second number value.", "0-9"));

    if (isNaN(num2)){
        while (isNaN(num2)) {
            window.alert("You've input an incorrect value.")
            num2 = parseFloat(window.prompt("Input your second numeric value.", "0-9"));
        }
    }

    operation = window.prompt("Type out which operation you would like to perform?", "+, -, *, or /");

    if (operation === "+" || operation === "-" || operation === "*" || operation === "/") {
        operation;
    } else {
        while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
            window.alert("You've input an incorrect value.")
            operation = window.prompt("Type out which operation you would like to perform?", "+, -, *, or /");
        }
    }

    calculate(num1, num2, operation);
}

// FUNCTION TO RUN FULL PROGRAM
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

// CALL MAIN() TO RUN PROGRAM
main();
