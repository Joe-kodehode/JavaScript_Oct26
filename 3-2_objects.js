// Objects

// Section 1: What is an Object?

// An object is a datatype that stores related data in key value pairs

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person); // logs the entire object
console.log(person.job); // logs a specific value stored in a key - dot notation
console.log(person["name"]); // logs a specific value stored in a key - bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// Section 2: Creating, Modifying and Deleting

person.country = "Norway"; // creates a new key-value pair
person.age++; // increase the age by 1
person.age += 5; // increase the age by 5
person.age = 40; // assign the age to specifically 40
delete person.job; // removes the key completely

console.log(person);

// Section 3: Looping through an Object using a 'for in loop'

// prettier-ignore
const user = {
  name: "joe",
  age: 38,
  location: "stavanger",
  hobbies: "gaming",
};

for (let key in user) {
  console.log(key); // logs the current loops key
  console.log(user[key]); // logs the current key's value
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// Sidequest: JSON - JavaScript Object Notation

const jsonUser = JSON.stringify(user); // turns an Object into JSON

const regularObject = JSON.parse(jsonUser); // turns JSON in to a regular Object

console.log(regularObject);

// Section 4: Nested Objects and Arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMember: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
};

console.log(userData.firstName);
console.log(userData.hobbies[1]);
console.log(userData.address.postCode);

// Section 5: Array of Objects // Object array

const products = [
  { productName: "Shirt", productId: 5, stock: 32 },
  { productName: "Pants", productId: 6, stock: 5 },
  { productName: "Socks", productId: 10, stock: 22 },
];

// What type of loop ?  'for of' because we're looping over an array

for (let product of products) {
  console.log(
    `${product.productName} is product ID ${product.productId} and has ${product.stock} in stock`,
  );
}

const people = [
  {
    name: "Thomas",
    isMember: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMember: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMember: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMember: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMember: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMember: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMember: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping", "BMX", "Warhammer"],
  },
  {
    name: "Cathy",
    isMember: false,
    age: 18,
    hobbies: ["design", "drawing"],
  },
];

// what type of loop do we use to loop over people? Answer: A 'for of' loop because people is an array.

// Goal: "Cathy is 18 years old, not a member and enjoys design"

for (let person of people) {
  // ternary to see if they are a member or not
  const membership = person.isMember ? "" : "n't";

  // generate a random index for the hobbies array
  const randIndex = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is ${person.age} years old, is${membership} a member and enjoys ${person.hobbies[randIndex]}`,
  );
}
