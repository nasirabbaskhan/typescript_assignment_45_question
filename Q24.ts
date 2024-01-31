// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// • Test whether an item is not in a array

let num1: number = 10;
let num2: number = 20;
let str1: string = "Hello";
let str2: string = "World";
let arr1: string[] = ["Hello", "World"];
let arr2: string[] = ["Hello", "World", "hi"];
// Tests for equality and inequality with strings
console.log("\nTests for equality and inequality with strings ");
console.log(str1 == str2);
console.log(str1 != str2);

// Tests using the lower case function
console.log("\nTests using the lower case function");
console.log(str1.toLowerCase() == str2.toLowerCase());
console.log(str1.toLowerCase() != str2.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(
  "\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to"
);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//Tests using "and" and "or" operators
console.log("\nTests using and and or operators");
console.log(num1 == num2 && str1 == str2);
console.log(num1 == num2 || str1 == str2);

// Test whether an item is in a array
console.log("\nTest whether an item is in a array");
console.log(arr1.includes(str1));
console.log(arr1.includes(str2));

//Test whether an item is not in a array
console.log("\nTest whether an item is not in a array");
console.log(arr1.includes(str1));
console.log(arr1.includes(str2));
