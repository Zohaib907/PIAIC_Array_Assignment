// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function getPositiveNumber(arr:number[]){
    let resultArr:any = [];
    let i:number = 0;
    while (i < arr.length) {
        if (arr[i] >= 0){
            resultArr.push(arr[i]);
        }
        i++;
    }
    return resultArr;
}
console.log("Positive numbers are:");
console.log(getPositiveNumber([-1,1,-2,2,0,3,4,-3,7]))
