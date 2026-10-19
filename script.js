// Loops

// A loop is a way to repeat code without writing it multiple times.

// Section 1: Why we use loops?

const names = ["Tom", "Eric", "Jessica", "Timmy"];

console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);

// Section 2: The 'for loop'

// where does it start ? i = 0
// when does it end ?  i < 3 (ends when i reaches 3)
// what changes each loop ? i++ (i goes up by 1)

for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

// infinite loop - when the "when does it end" is never met
// count backwards from 10 to 0
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// even numbers from 0 - 100
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// Section 3: Combine loops with functions and methods.

// Function that takes in an array as a parameter, cleans and console logs each element of the array one by one using a loop.

function greetEveryone(array) {
  for (let i = 0; i < array.length; i++) {
    const cleanedName = array[i].trim().toLowerCase();
    console.log(`Hello, ${cleanedName}`);
  }
}

const people = ["  alIce", "  BOB   ", "charLIe  ", "dEBbY   ", "TiMMy  "];
greetEveryone(people);

const people2 = ["  JiM  ", "henrY  ", "JanET ", "     SusIE"];
greetEveryone(people2);

// Section 4: The 'for of loop'

// DRY - don't repeat yourself

const colors = ["red", "green", "blue"];

// we can use a 'for of loop' when we want to loop over an array, hitting every element along the way from start to end.
for (let color of colors) {
  console.log(color);
}

// Section 5: The 'while loop'

// A while loop will run until a certain criteria is met - useful for when we dont know how many loops are necessary.

let count = 0;

while (count <= 5) {
  console.log(count);
  count++;
}

// Guessing game using a while loop

// generate a random number between 1-10
const secretNum = Math.floor(Math.random() * 10) + 1;

let guess = 0;

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing ${guess}`);

  if (guess === secretNum) {
    console.log(`Correct! The secret number was: ${secretNum}`);
  }
}

// Section 6: Populating an array using a loop.

// Make a function which returns an array of random numbers.

function makeRandomArray(length, sides) {
  const resultArray = [];

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * sides) + 1;
    resultArray.push(randomNum);
  }
  return resultArray;
}

console.log(makeRandomArray(5, 10));
console.log(makeRandomArray(10, 20));
console.log(makeRandomArray(100, 12));

// Section 7: Finding the highest number in an array.

function findHighest(array) {
  let highestNum = array[0];

  for (let num of array) {
    console.log(num);

    if (num > highestNum) {
      highestNum = num;
    }
    console.log(highestNum);
  }
  return highestNum;
}

const exampleArray = makeRandomArray(20, 100);

console.log(findHighest(exampleArray));
