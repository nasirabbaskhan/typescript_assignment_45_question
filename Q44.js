"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function orderSandwiches(...ingredients) {
    console.log("Sandwich Order:");
    // Check if any ingredients are provided
    if (ingredients.length === 0) {
        console.log("You ordered an empty sandwich. Please add some ingredients!");
    }
    else {
        console.log("Ingredients:");
        ingredients.forEach((element, index) => {
            console.log(`${index + 1} ${element}`);
        });
        console.log("Enjoy your sandwich!\n");
    }
}
// Call the function with different numbers of arguments
orderSandwiches("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwiches("Turkey", "Swiss Cheese");
orderSandwiches();
