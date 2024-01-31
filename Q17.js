"use strict";
//  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
let guest_names = [
    "Akhtar",
    "Imran",
    "kamran",
    "Zafar",
    "Nawaz",
    "Amir",
    "Sadiq",
    "kashif",
    "Javeed",
];
console.log("We can invite only two people for dinner because we have only two guest spaces");
// delete the names of guest from the array to remain only two guests
while (guest_names.length > 2) {
    let removed_guest = guest_names.pop();
    console.log(`hello, ${removed_guest}, Sorry! You are not invited to come on dinner.\nThank You\n`);
}
console.log(guest_names);
for (let i = 0; i < guest_names.length; i++) {
    let guest = guest_names[i];
    console.log(`hello, ${guest}, You are invited to come on dinner.\nThank You\n`);
}
// Empty the list
// delete the names of guest from the array to remain only two guests
while (guest_names.length > 0) {
    let removed_guest = guest_names.pop();
}
console.log("Final guest list:", guest_names); // Should be an empty list
