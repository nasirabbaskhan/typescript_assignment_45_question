"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
let alien_color1 = "yellow";
if (alien_color1 === "yellow") {
    console.log("The player just earned 5 points.");
}
let alien_color2 = "red";
if (alien_color2 === "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Invalid Input");
}
