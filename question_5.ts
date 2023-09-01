// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number?
function findFactorial(n: number){
    let result:number = 1;
    while(n > 1){
        result *= n;
        n--;
    }
    return result;
}
var no:number = 5;
console.log("Factorial of the number: "+ (no));
console.log(findFactorial(no));
