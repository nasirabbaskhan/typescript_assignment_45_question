// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(name: string, country: string) {
  return `${name}, ${country}`;
}
let country = city_country("Lahore", "Pakistan");
console.log(country);
let country1 = city_country("Multan", "Pakistan");
console.log(country1);
let country2 = city_country("Dahli", "India");
console.log(country2);
