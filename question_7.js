"use strict";
//  - Create a function that takes an array of numbers as parameter.Use a while loop to calculate and return the sum of all the numbers in the array.
function addUp(arr) {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log("sum of all numbers are:");
console.log(addUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
