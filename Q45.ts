//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Function to store information about a car
function createCar(
  manufacturer: string,
  modelName: string,
  ...additionalInfo: Record<string, any>[]
) {
  const car: Record<string, any> = {
    manufacturer: manufacturer,
    modelName: modelName,
  };
  // Add additional information from keyword arguments
  additionalInfo.forEach((info) => {
    for (const key in info) {
      if (info.hasOwnProperty(key)) {
        car[key] = info[key];
      }
    }
  });

  return car;
}

// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", {
  color: "Blue",
  year: 2022,
  optionalFeature: "Sunroof",
});

// Print the returned Object
console.log("Car Information:", carInfo);
//print element of car object
for (const key in carInfo) {
  console.log(`${key}: ${carInfo[key]}`);
}
