// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Greet to each magician’s name.
//Call show_magicians() to see that the list has actually been modified.
let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function show_magicians(magicians: string[]) {
  magicians.forEach((element) => {
    console.log(`Hello there, ${element}`);
  });
}

show_magicians(magicians);
