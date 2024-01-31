"use strict";
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["asad", "khalid", "ali", "arif"];
//get array elements by uing index
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//get array elements by using forEach() method
names.forEach((Element) => {
    console.log(Element);
});
