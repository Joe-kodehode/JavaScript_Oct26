// Methods (built-in functions)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it. Some methods alter the original piece of data, others don't alter the original!

// Section 1: String Methods
const text = "     Hello, JavaScript World World!      ";
console.log(text);
console.log(text.trim()); // trim removes whitespace from both ends
console.log(text.toUpperCase()); // converts string to uppercase
console.log(text.toLowerCase()); // converts string to lowercase
console.log(text.indexOf("JavaScript")); // returns starting index of the first instance of the passed in text
console.log(text.slice(5, 10)); // extracts characters from index 5-9. Starting index is included, end index is not included.
console.log(text.replace("World", "Universe")); // Replaces the first instance of the passed in word with the new word.
console.log(text.replaceAll("World", "Galaxy")); // Replaces all instances of the passed in word with the new word.
console.log(text.charCodeAt(5)); // Returns the unicode number of character at passed in index
console.log(text.repeat(3)); // Repeats the string as many times as the passed in number
console.log(text.length); // Returns the number of characters in the string

// Section 1.1: Converting a String into an Array
console.log(text.trim().split(" "));

// Section 1.2: Converting a String into a Number
let numberString = "123.45xyz";

console.log(Number(numberString)); // converts a string into a number. returns NaN (not a number) if any part of the string is invalid.
console.log(parseInt(numberString)); // converts a string into a whole number, ignores text and decimals.
console.log(parseFloat(numberString)); // converts a string into a number, doesn't ignore decimals, does ignore text.

// Section 2: Array Methods
const colors = ["Red", "Green", "Blue"];
// Even though colors is a const, we can use many different methods to alter the elements inside the array. We still can't reassign colors with =
// console.log(colors[1]);

console.log(colors.length); // returns the number of elements in the array
colors.push("Yellow"); // adds "Yellow" as a new element at the end of the array
console.log(colors);
const poppedColor = colors.pop(); // removes the last element of the array - does affect original array
console.log(colors);
console.log(poppedColor);
colors.unshift("Purple"); // adds "Purple" as a new element at the start of the array
console.log(colors);
colors.shift(); // removes the first element of the array
console.log(colors);
colors.splice(0, 2, "Orange", "Pink"); // Replaces elements in the array, alters the original array
//  Syntax: splice(starting index, amount of elements to remove, elements to replace with)
console.log(colors);
const splicedColors = colors.toSpliced(1, 1, "Brown"); // works like splice, but DOESN'T alter the original
console.log(splicedColors);

const numbersArray = [3, 1, 4, 1, 5, 9, 5];
const sortedNumbers = numbersArray.toSorted(); // makes a copy of the array and sorts the elements inside
console.log(sortedNumbers);
console.log(numbersArray);
numbersArray.sort(); // sorts the numbers in the array numerically, alters the original array
console.log(numbersArray);

const stringsArray = ["hello", "this", "is", "an", "array", "of", "strings"];
stringsArray.sort(); // sorts the strings alphabetically
console.log(stringsArray);

console.log(sortedNumbers[6]); // targets element at index 6
console.log(sortedNumbers.at(6)); // targets element at index 6
console.log(sortedNumbers.at(-1)); // targets the last element in the array

const reversedArray = sortedNumbers.toReversed(); // makes a copy of the original array and reverses it.
console.log(reversedArray);

sortedNumbers.reverse(); // sorts and reverses the original array.
console.log(sortedNumbers);

// Section 2.1: Converting an Array into a String
console.log(colors);
console.log(colors.join(" ")); // joins together the elements in the array into a string with a space between each element

// Section 3: Number Methods
const myNum = 3.9369375923457;

console.log(myNum);
console.log(myNum.toFixed(2)); // rounded to the nearest 2 decimals AND convered the number into a string
console.log(myNum.toExponential()); // returns our number in exponential notation.

// Section 3.1: Converting a Number into a String
console.log(myNum.toString());

// Section 4: Chaining methods together

const rawString = "      JavaScript is fun!     ";
console.log(rawString);

// remove whitespace from front and back ✅ .trim()
// replace "fun" with "awesome" ✅ .replace("fun", "awesome")
// make it uppercase ✅ .toUpperCase()

const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();

console.log(processedString);

// convert from array to string
// make the string lowercase
const wordsArray = ["HelLO", "worLD"];

const cleanedArray = wordsArray.join(" ").toLowerCase();

console.log(cleanedArray);

// take a number and round it to 2 decimals, convert it into a string and repeat it twice

const exampleNum = 345234.3452345;
const cleanedNum = exampleNum.toFixed(2).repeat(2);
console.log(cleanedNum);

// Sidequest: Rounding numbers

console.log(Math.round(123.65)); // Math.round() rounds the passed in number to the nearest whole number
console.log(Math.ceil(123.01)); // Math.ceil() rounds up the passed in number to the nearest whole number
console.log(Math.floor(123.99)); // Math.floor() rounds down the passed in number to the nearest whole number

// Math.random() generates a random number between 0.000000 - 0.9999999
console.log(Math.random());

// random num between 0.000000 - 9.999999
console.log(Math.random() * 10);

// random num between 0 - 10
console.log(Math.floor(Math.random() * 11));

// random num between 1 - 10
console.log(Math.floor(Math.random() * 10) + 1);
