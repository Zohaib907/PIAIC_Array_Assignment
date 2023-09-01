// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function mySplice(arr:string[], idx:number, val:string) {
 arr.splice(idx,0,val);
 return arr;
}
const originalArr:string[] = ["Banana", "Orange", "Apple", "Mango"];
var indx:number = 2;
var val:string = "Kiwi";
console.log('Original Array:');
console.log(originalArr);
// Call function to add Kiwi at 2 index in array
const modifiedArr = mySplice(originalArr, indx, val);
console.log('Modified Array:');
console.log(modifiedArr);