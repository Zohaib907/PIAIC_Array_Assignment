// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
function addItems(arr:string[], val:string){
    arr.splice(arr.length,0,val);
}
function removeItems(arr:string[]){
    arr.splice(arr.length-1,1);
}
function updateItems(arr:string[], val:string, index:number){
    arr.splice(index,1,val);
}

let cartItems = ["Apple", "Banana", "Grapes"];
console.log("Original cartItems");
console.log(cartItems);

// Add Item
addItems(cartItems, "Peach")
console.log("Add cartItems");
console.log(cartItems);

// Remove Item
removeItems(cartItems);
console.log("Remove cartItems");
console.log(cartItems);

// Update item Banana
var index:number = cartItems.indexOf("Banana");
updateItems(cartItems, "Kiwi", index);
console.log(cartItems);