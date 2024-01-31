"use strict";
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let contries = [
    "Pakistan",
    "India",
    "Australia",
    "England",
    "South Afriqa",
    "Newzeeland",
];
let rivers = ["Indus", "Niger", "Amazon", "Yangtze", "Yellow River"];
let mountains = [
    "K2",
    "Mount Everest",
    "Karakoram",
    "Hindu Kush",
    "Pamir",
];
let languages = ["Urdu", "Arabic", "Punjabi", "English", "frinch"];
let cities = ["Karachi", "Dhaka", "Osaka", "New York", "Chongqing"];
// printimg array of cities
console.log("Cities: ");
cities.forEach((element, index) => {
    console.log(`${index + 1} ${element}`);
});
console.log("\n");
// printimg array of mountains
console.log("Mountains: ");
mountains.forEach((element, index) => {
    console.log(`${index + 1} ${element}`);
});
console.log("\n");
// printimg array of Countries
console.log("Countries: ");
contries.forEach((element, index) => {
    console.log(`${index + 1} ${element}`);
});
console.log("\n");
// printimg array of languages
console.log("Languages: ");
languages.forEach((element, index) => {
    console.log(`${index + 1} ${element}`);
});
console.log("\n");
// printimg array of rivers
console.log("Rivers: ");
rivers.forEach((element, index) => {
    console.log(`${index + 1} ${element}`);
});
console.log("\n");
