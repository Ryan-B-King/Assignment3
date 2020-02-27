//STEP 1
function halfNumber(num) {
    "use strict";
    let half;
    half = num / 2;
    return window.console.log("Half of " + num + " is " + half + ".");
}

// TEST FUNCTION CALLS
halfNumber(5);
halfNumber(20);

// ****************************************************

//STEP 2
function squareNumber(num) {
    "use strict";
    let square;
    square = num * num;
    return window.console.log("The result of squaring the number " + num + " is " + square + ".");
}

// TEST FUNCTION CALLS
squareNumber(3);
squareNumber(10);

// ****************************************************

//STEP 3

function percentOf(num1, num2) {
    "use strict";
    let percentage;
    percentage =  parseFloat((num1 / num2) * 100);
    return window.console.log(num1 + " is " + percentage + "% of " + num2 + ".");
}

// TEST FUNCTION CALLS
percentOf(2, 4);
percentOf(3, 12);

// ****************************************************

//STEP 4

function findModulus(num1, num2) {
    "use strict";
    let modulus;
    modulus = num1 % num2;
    return window.console.log(modulus + " is the modulus of " + num2 + " and " + num1 + ".");
}

findModulus(10, 4);
findModulus(5, 1);

// ****************************************************

//STEP 5

let var1;
let var2;
let var3;

var1 = Number(window.prompt("Enter first number to add."));
var2 = Number(window.prompt("Enter second number to add."));
var3 = Number(window.prompt("Enter third number to add."));

function addTotal(num) {
    "use strict";
    let total;
    let i;
    total = num;
    for (i = 1; i < arguments.length; i++) {
        total += Number(arguments[i]);
    }
    return window.console.log("The total sum of: " + var1 + ", " + var2 + ", and " + var3 + " equals " + total + ".");
}

addTotal(var1, var2, var3);