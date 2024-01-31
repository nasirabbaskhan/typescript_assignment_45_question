"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// it uses a `for` loop to iterate over
// the `guest_name` array and print a message for each guest, inviting them to the dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guest_name = ["Ali", "Ahmad", "Nasir", "Amir", "Sadiq", "kashif"];
for (let i = 0; i < guest_name.length; i++) {
    let guestNames = guest_name[i];
    console.log(`Hello ${guestNames}! I invited you to come on dinner.\nThank You\n`);
}
