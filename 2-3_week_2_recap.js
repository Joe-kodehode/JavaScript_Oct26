// Functions & Methods Recap

// Check if an array includes an item. (function, array, methods)

const shoppingList = ["milk", "bread", "cheese", "pasta"];
const gamesList = [
  "Mario Kart",
  "Hello Kitty Island Adventure",
  "Counter Strike",
  "Control: Resonant",
  "Pang",
  "Animal Crossing",
  "Dragon Quest 11",
  "Call of Duty",
];

function checkItem(item, array) {
  if (array.includes(item)) {
    return `The array includes ${item}`;
  } else {
    return `${item} was not in the array`;
  }
}

console.log(checkItem("milk", shoppingList));
console.log(checkItem("Pang", gamesList));
console.log(checkItem("Gears of War", gamesList));

// it's hard coded to milk...
// it would be better if I could decide what to check for when I call the function...
// it's always saying milk!  we need it to say whatever we passed in...
// if the if comes back false, we dont return anything, therefore we get undefined when we console log the function call

// Make it work for more than one array (sometimes we want to check a different array, not the shoppingList)

// convert a sentence into kebab-case (function, methods)

function toKebabCase(rawString) {
  // get rid of the whitespace infront and behind
  // make it all lowercase
  // replace " " with "-"
  // return the string
  const kebabbedString = rawString.trim().replaceAll(" ", "-").toLowerCase();

  return kebabbedString;
}

const mySentence = "   Hello World From JavaScript   ";
// "hello-world-from-javascript"

console.log(toKebabCase(mySentence));
console.log(
  toKebabCase(
    "this is an exampLE OF THE FUNctION at Work                                                                                                                                                   ",
  ),
);

// Make a function to check if a word is a Palindrome

function checkPalindrome(word) {
  if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}

console.log(checkPalindrome("Racecar"));
console.log(checkPalindrome("banana"));

// We cant use .reverse() on a string as its an array method
// convert the string into an array, reverse it, convert back to string

// console.log("banana".split("").reverse().join(""));

// Math.random()

// Math.random() gives us a random number between 0.00000 - 0.99999
console.log(Math.random());

// 0.00000 - 9.999999
console.log(Math.random() * 10);

// 0-9
console.log(Math.floor(Math.random() * 10));

// 1-10
console.log(Math.floor(Math.random() * 10) + 1);

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
  "alakazam",
];

// Target a random element in the array
console.log(pokemon);

const randomIndex = Math.floor(Math.random() * pokemon.length);
console.log(randomIndex);

console.log(pokemon[randomIndex]);

// make a rock paper scissors game

const rockPaperScissors = (player1, player2) => {
  switch (player1 + player2) {
    case "rock" + "paper":
    case "paper" + "scissors":
    case "scissors" + "rock":
      return "player 2 wins";
    case "paper" + "rock":
    case "rock" + "scissors":
    case "scissors" + "paper":
      return "player 1 wins";
    case "paper" + "paper":
    case "rock" + "rock":
    case "scissors" + "scissors":
      return "It's a draw";
    default:
      return "Error";
  }
};

// HOW DO I GET A RANDOM ANSWER???  "rock", "paper", "scissors"

const answerArray = ["rock", "paper", "scissors"];

const ranIndex = Math.floor(Math.random() * 3);
const ranIndex2 = Math.floor(Math.random() * 3);

const aiAnswer = answerArray[ranIndex];
console.log(aiAnswer);
const aiAnswer2 = answerArray[ranIndex2];
console.log(aiAnswer2);

console.log(rockPaperScissors(aiAnswer, aiAnswer2));

// the computer's answer will be randomised
