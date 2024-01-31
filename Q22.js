"use strict";
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
let mountains = [
    "K2",
    "Mount Everest",
    "Karakoram",
    "Hindu Kush",
    "Pamir",
];
// This will create an Array Index Error
console.log(mountains[5]);
// This will not create an Array Index Error
console.log(mountains[4]);
