"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function showMagicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
// Call showMagicians with the original array
console.log("Original Magicians:");
showMagicians(magicians);
function make_Great(copyMagicians) {
    let greatMagicians = [];
    copyMagicians.forEach((element) => {
        greatMagicians.push("Great " + element);
    });
    return greatMagicians;
}
//Call makeGreat with a copy of the original array
let greatMagicians = make_Great([...magicians]);
//print array
console.log(greatMagicians);
//element of array
greatMagicians.forEach((element) => {
    console.log(element);
});
// Call showMagicians with the new array containing "Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
