"use strict";
//  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["markeeter", "developer", "designer"];
// Check if the array is empty
if (users.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        console.log("Hello " + users[index] + ", thank you for logging in again.");
    }
}
// Remove all usernames from the array
users = [];
// Check again if the array is empty
if (users.length == 0) {
    console.log("We need to find some users!");
}
