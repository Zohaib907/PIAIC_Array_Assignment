"use strict";
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number?
function findFactorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}
var no = 5;
console.log("Factorial of the number: " + (no));
console.log(findFactorial(no));
