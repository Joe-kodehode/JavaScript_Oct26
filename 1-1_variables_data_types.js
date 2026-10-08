// Intro to JavaScript

// we can use comment in JS

// console.log

console.log("hello world");

console.log(10);

console.log(5 * 5);

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables and functions in JavaScript.

// Data Types & Variables

// String (text in JS)
let exampleString = "This is a string";
console.log(exampleString);

// Numbers
let exampleNumber = 100;
console.log(exampleNumber);

// Boolean
let exampleTrue = true;
let exampleFalse = false;
console.log(exampleTrue);
console.log(exampleFalse);

// Array
// Arrays use Indexes to track where elements are inside. Index starts at 0.
let exampleArray = ["A", "B", "C"];
console.log(exampleArray);
console.log(exampleArray[1]);

// Object - store key-value pairs
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

console.log(person);
console.log(person.isStudent);

// Undefined variable - declared but not assigned a value.
let exampleUndefined;
console.log(exampleUndefined);

// Null - given it no value
let exampleNull = null;
console.log(exampleNull);

// let vs. const
// Use "let" when the value of the variable might change, and "const" when it should remain constant.

let changeableMessage = "I can change";
console.log(changeableMessage);
changeableMessage = "I've changed!";
console.log(changeableMessage);

const fixedValue = "I cannot change";
console.log(fixedValue);
// fixedValue = "Uh-oh";
console.log(fixedValue);

// General rule: Use const unless we have to use let. This avoids accidental reassigning of variables.

// Operators

const num1 = 10;
const num2 = 5;

console.log(num1, num2);

// Arithmetic operators
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus (remainder)

console.log(2 % 2); // can be used to find odd or even

// Using the + operator to concatenate strings
const firstName = "Jane";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// Compound Assignments

let counter = 0;

counter = counter + 10;
counter += 10;

console.log(counter);

counter -= 5;

console.log(counter);

// increment/decrement by 1

let productStock = 10;

productStock--;

productStock++;
console.log(productStock);

let score = 10;
console.log("Initial score:", score);
score += 5; // Equivalent to score = score + 5;
console.log("After adding 5:", score); // 15

// Subtraction assignment (-=):
score -= 3; // Equivalent to score = score - 3;
console.log("After subtracting 3:", score); // 12

// Multiplication assignment (*=):
score *= 2; // Equivalent to score = score * 2;
console.log("After multiplying by 2:", score); // 24

// Division assignment (/=):
score /= 4; // Equivalent to score = score / 4;
console.log("After dividing by 4:", score); // 6

// Remainder assignment (%=):
score %= 5; // Equivalent to score = score % 5;
console.log("After modulus 5:", score); // 6 mod 5 equals 1

// Comparison Operators

// These operators compare values and return a boolean (true or false)

console.log(15 > 20); // greater than >
console.log(15 < 20); // less than <
console.log(15 >= 15); // greater than or equal to >=
console.log(15 <= 15); // less than or equal to <=

console.log(15 == "15"); // equal to (does not take into account data type)
console.log(15 === "15"); // strictly equal to (does take into account data type)

console.log(15 != "15"); // not equal to
console.log(15 !== "15"); // strictly not equal to

// typeof operator
const myNum = 100;
const myString = "hello there";
const myBool = true;

console.log(typeof myNum);
console.log(typeof myString);
console.log(typeof myBool);
