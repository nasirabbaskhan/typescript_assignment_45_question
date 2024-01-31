// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//progeame 1

let personName = "  \t   Shahid  khan Afridi   \n";

// Print the name with whitespace
console.log(personName);
console.log(JSON.stringify(personName)); // JSON.stringify to display whitespace characters

// strip whitespace from name
let StrippingNames: string = personName.trim();

// Print the name without whitespace
console.log(StrippingNames);
console.log(JSON.stringify(StrippingNames));

// programe 2

// favorite number
let myFavoriteNumber: number = 12;

//reveals favorite number by using variable and storing in massage variable
let message = `my favorite number is ${myFavoriteNumber} :`;
console.log(message);
