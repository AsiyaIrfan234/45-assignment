// //creating a variable
 let water = "water";

// //Tests for equality 
 console.log("water is equal to water");
 console.log(water == "water");

// //Tests for inequality
 console.log("water is not equal to water" );
 console.log(water !== "water");

//Tests using the lower case function

 let uppercaseWater = "Water"

// //Equal to 
 console.log("Water is equal to water after converting to lowercase");
 console.log(uppercaseWater.toLocaleLowerCase() == "water");

// //Not equal to
 console.log("Water is not equal to water after converting to lowercase");
 console.log(uppercaseWater.toLocaleLowerCase() !== "water");

// Numerical tests involving equality and inequality, greater then and less then, greater then or equal to, and less then or equal to 

 let six = 6;
 let twelve = 12;
// //Equal to 
 console.log("six is equal to twelve");
 console.log(six == twelve);

// ///Not equal to
 console.log("six is not equal to twelve");
 console.log(6 !== twelve);

//Greater then
 console.log("12 is greater then six");
 console.log(12 > 6);
// //less then
 console.log("12 is less then 6");
 console.log(12 < 6);

// Greater then or equal to 
 console.log("twelve is greater then or equal to six");
 console.log(12 >= 6);

// //Less then or equal to
 console.log("twelve is less then or equal to six");
 console.log(12 <= 6);

//Tests using "and" and "or" operators

//using && (and)
console.log("twelve is not equal to six and twelve is greater then six");
console.log("twelve != six && twelve > six");

console.log("twelve is not equal to six and six is greater then twelve");
console.log("twelve != six && six > twelve");

// using || (or)
console.log("twelve is greater than six or twelve is equal to twelve");
console.log("twelve > six || twelve == twelve");

console.log("twelve is less than six or twelve is not equal to twelve");
console.log("twelve < six || twelve != twelve");

//Test whether an item is in a array
let fruits = ["apple","orange","banana"]
console.log("apple is include in my fruits array");
console.log(fruits.includes("apple"));

//Test whether an item is not in a array

console.log("apple is not include in my fruits array");
console.log(!fruits.includes("apple"));



