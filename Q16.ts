//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let modify_guest_name = ["Ali", "kamran", "Nawaz", "Amir", "Sadiq", "kashif"];

//Add one new guest to the beginning of the array
modify_guest_name.unshift("Akhtar");
// console.log(modify_guest_name);

//Add one new guest to the middle of the array
modify_guest_name.splice(3, 0, "Zafar");
// console.log(modify_guest_name);

//Add one new guest to the end of the array
modify_guest_name.push("Javeed");
// console.log(modify_guest_name);

for (let i = 0; i < modify_guest_name.length; i++) {
  let guestNames = modify_guest_name[i];
  console.log(
    `Hello ${guestNames}! I invited you to come on bigger dinner table.\nThank You\n`
  );
}

// informing people that we have found a bigger dinner table
console.log("people that we have found on bigger dinner table");
modify_guest_name.forEach((element) => {
  console.log(element);
});
