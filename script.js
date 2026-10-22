// Loop & Object recap

// Looping through arrays.

const fruits = ["Apple", "Banana", "Mango", "Grapes", "Pear"];

// for loop - grants us access to starting index, when we end, how we increment.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of loop - loops over arrays, gives us access to a variable which stores a different element of the array each loop. The loop will start at the beginning of the array and go through all elements, then stop.
for (let fruit of fruits) {
  console.log(fruit);
}

// Section 2: Looping with conditions

const numbers = [12, 5, 8, 130, 44, 3, 22];

for (let number of numbers) {
  // if the current number being looped over is less than 10, dont log it.
  if (number < 10) {
    continue;
  }

  // if the current number being looped over is over 100, stop the loop.
  if (number >= 100) {
    break;
  }

  console.log(number);
}

// Section 3: The While Loop - sets a condition to run the loop, MAKE SURE EVENTUALLY IT WILL BE FALSE! otherwise we get an infinite loop :(

const ranNum = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== ranNum) {
  guess++;
  console.log(`Guessing: ${guess}`);
  if (guess === ranNum) {
    console.log(`Correct! The number was: ${ranNum}`);
  }
}

// Section 4: Basic Object Review

const movie = {
  title: "The Matrix",
  stars: [
    "keanu reeves",
    "laurence fishburne",
    "carrie-ann moss",
    "hugo weaving",
  ],
  runtime: "2h16m",
  year: 1999,
};

console.log(movie);
console.log(movie.title);
console.log(movie.stars[3]);

// change runtime to "2h30m"
movie.runtime = "2h30m"; // change the value in a key
movie.year = 2000; // change the value in a key
movie.rating = 5; // create a new key-value pair
delete movie.runtime; // delete a key value pair

console.log(movie);

// Section 5: Looping through an object using for in loop / dynamic keys

for (let key in movie) {
  console.log(key); // current key we're looping over
  console.log(movie[key]); // current key's value
}

// Section 6: Array of objects

const fruits2 = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 5.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

// Describe each fruit using a loop

for (let fruit of fruits2) {
  console.log(
    `${fruit.name} is a ${fruit.color} fruit from ${fruit.countryOfOrigin}`,
  );
}

// --------------------------------------
// Section 7: Find the Cheapest Fruit
// --------------------------------------

let cheapest = null;
let lowestPrice = Infinity;

for (let fruit of fruits2) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    cheapest = fruit.name;
  }
}

console.log(
  `The cheapest fruit is ${cheapest}, costing ${lowestPrice} kr. per kg.`,
);

// --------------------------------------
// Section 8: Adding and Removing Properties in a Loop
// --------------------------------------

// Add a "good" property to every fruit
for (let fruit of fruits2) {
  fruit.good = true;
}

console.log(fruits2); // now all have "good: true"

// Remove the "good" property
for (let fruit of fruits2) {
  delete fruit.good;
}

console.log(fruits2); // back to original

// --------------------------------------
// Section 9: Object in Function
// --------------------------------------

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories per 100g and costs ${fruit.pricePerKg} kr. per kg.`;
}

console.log(describeFruit(fruits2[1]));

// --------------------------------------
// Section 10: Summary
// --------------------------------------

// ✅ Use loops to repeat tasks or go through arrays and objects.
// ✅ for...of is great for typical arrays;
// ✅ for...in is used for object keys.
// ✅ Objects store data in key-value pairs.
// ✅ Arrays can contain multiple objects. (Object arrays)
// ✅ Loops can combine with logic, conditions, and functions.
// ✅ You can add, modify, or delete properties dynamically.
