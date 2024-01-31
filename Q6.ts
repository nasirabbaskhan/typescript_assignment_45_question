// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName = "  \t   Shahid  khan Afridi   \n";

// Print the name with whitespace
console.log(personName);
console.log(JSON.stringify(personName)); // JSON.stringify to display whitespace characters

// strip whitespace from name
let StrippingNames: string = personName.trim();

// Print the name without whitespace
console.log(StrippingNames);
console.log(JSON.stringify(StrippingNames));
