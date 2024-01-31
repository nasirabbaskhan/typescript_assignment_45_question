"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", text = "I love TypeScript") {
    console.log(`The size of the shirt is: ${size} and the message printed on it is: ${text}.`);
}
make_shirt();
function make_shirt1(size = "medium", text = "I love Jvascript") {
    console.log(`The size of the shirt is: ${size} and the message printed on it is: ${text}.`);
}
make_shirt1();
function make_shirt2(size, text) {
    console.log(`The size of the shirt is: ${size} and the message printed on it is: ${text}.`);
}
make_shirt2(12, "I love learning the codding");
