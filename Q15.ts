//  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let invitedGuest = [
  "Ahmad Raza",
  "Fakhar ",
  "Nadir",
  "kamran",
  "Kashif",
  "Nawaz",
];
let new_guest_list = invitedGuest.splice(3, 3);

console.log("The guest who can’t make it are:");

for (let i = 0; i < new_guest_list.length; i++) {
  let guestNames = new_guest_list[i];
  console.log(guestNames);
}

//list of new guest and the guest who can’t make the dinner
let modify_guest_name = ["Ali", "kamran", "Nawaz", "Amir", "Sadiq", "kashif"];
for (let i = 0; i < modify_guest_name.length; i++) {
  let guestNames = modify_guest_name[i];
  console.log(
    `Hello ${guestNames}! I invited you to come on dinner.\nThank You\n`
  );
}
