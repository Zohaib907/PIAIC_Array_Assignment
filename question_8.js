"use strict";
//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function convertIntoFahrenheit(celsiusArr) {
    let fahrenheitArr = [];
    let i = 0;
    while (i < celsiusArr.length) {
        fahrenheitArr[i] = ((9 / 5) * celsiusArr[i]) + 32;
        i++;
    }
    return fahrenheitArr;
}
let arrCelsius = [20, 30, 37, 40];
console.log("The array of Celcius is ", convertIntoFahrenheit(arrCelsius));
