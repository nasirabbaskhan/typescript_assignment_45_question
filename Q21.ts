//The code creates two TypeScript objects, `Person_info` and `Person_info2`, which store information
// about a person. Each object has properties such as `name`, `age`, `profession`, `hobbies`, and `languages`.
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
interface Person {
  name: string;
  age: number;
  profession: string;
  hobbies: string[];
  languages: string[];
}
console.log(`\nperson_info information`);
let Person_info: Person = {
  name: "Nasir Abbas",
  age: 20,
  profession: "Web developer",
  hobbies: ["codding", "Reading", "Listening", "Travelling", "Music"],
  languages: ["English", "Urdu", "Punjabi", "french"],
};

console.log("Name:", Person_info.name);
console.log("Age:", Person_info.age);
console.log("profession:", Person_info.profession);

console.log(`\n Hobbies`);
for (let i = 0; i < Person_info.hobbies.length; i++) {
  let person = Person_info.hobbies[i];
  console.log(`${i + 1} ${person}`);
}

console.log(`\nLanguages`);
for (let j = 0; j < Person_info.languages.length; j++) {
  let person = Person_info.languages[j];
  console.log(`${j + 1} ${person}`);
}
let person_info2: Person = {
  name: "Asad Ali",
  age: 21,
  profession: "App developer",
  hobbies: ["codding", "Reading", "cricket", "Listening", "singing"],
  languages: ["Arabic", "Urdu", "pashtoo", "sindhi"],
};

console.log(`\nperson_info2 information`);
console.log("Name:", person_info2.name);
console.log("Age:", person_info2.age);
console.log("profession:", person_info2.profession);

console.log(`\n Hobbies`);
for (let i = 0; i < person_info2.hobbies.length; i++) {
  let person = person_info2.hobbies[i];
  console.log(`${i + 1} ${person}`);
}

console.log(`\nLanguages`);
for (let j = 0; j < person_info2.languages.length; j++) {
  let person = person_info2.languages[j];
  console.log(`${j + 1} ${person}`);
}
