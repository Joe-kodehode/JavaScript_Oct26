// Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// Regular function and Hoisting
function sayHello() {
  console.log("hello");
}

sayHello();

// We're allowed to call the function, before we've coded it because of hoisting. Hoising places the function at the top (we dont see this happen)

// function call

// Arrow Functions (no hoisting, need to call after creating the function)
const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// Return Statement and Scope

function messageOne() {
  console.log(
    "This function sends a message to the console. The function does not return any data",
  );
}

messageOne();

function messageTwo() {
  const myMessage =
    "This is a string, it was made inside the function and im using the return keyword to send it outside of the function";

  return myMessage;
}

const returnedData = messageTwo();

console.log(returnedData);

// If we create a variable with data inside a function, it is only scoped to that function, we cant use it outside the function.

// We can use the return keyword to send data back to/replace the function call.

// As soon as the 'return' runs, we exit the function and no code inside the function below is read.

// Functions with Parameters

// Example 1: Hard coded

function add() {
  return 3 + 4;
}

console.log(add());

// Example 2: Soft coded (dynamic)

function minus(num1, num2) {
  return num1 - num2;
}

console.log(minus(10, 3));
console.log(minus(100, 50));

// Functions can have paramaters. Paramaters hold data, similar to variables.

// When we call the function, we can put data into our paramaters to be used inside the function.

// Using paramaters makes functions SUPER reusable, since we can pass in different data each time we call the function.

// A reusable greeting function

const greeter = (name, time) => {
  return `Good ${time} ${name}`;
};

console.log(greeter("Joe", "Morning"));
console.log(greeter("Tim", "Evening"));
console.log(greeter("Jess", "Afternoon"));
console.log(greeter("Victoria", "Night"));

// 1. all of the " " +  ✅ used a template string
// 2. not everyone is called Joe ✅
// 3. it's not always morning ✅

// Implicit Return in Arrow Functions

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 10));
console.log(multiply(100, 10));

// If we're instantly returning data from an arrow function, we dont need the return keyword or the {}

// Making a calculator using a function and a switch conditional

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error, invalid operator";
  }
}

console.log(calculator(50, 5, "+")); // 55
console.log(calculator(50, 5, "-")); // 45
console.log(calculator(50, 5, "*")); // 250
console.log(calculator(50, 5, "/")); // 10
console.log(calculator(50, 5, "cat")); // Error

// Updating a global variable using a function.

// We're making a game and we need to adjust the player's health when they pick up heals or take damage.

let health = 100;

let maxHp = 200;

// make a function that changes the player's health.

function changeHp(direction, amount) {
  if (direction === "up") {
    health += amount;
    if (health > maxHp) {
      health = maxHp;
    }
  } else if (direction === "down") {
    health -= amount;
    if (health <= 0) {
      console.log("You died");
      health = 100;
    }
  }
}

changeHp("up", 20); // picked up small health pack
console.log(health); // 120
changeHp("down", 100); // fell off cliff
console.log(health); // 20
changeHp("up", 500); // picked up huge health pack
console.log(health); // 200
changeHp("down", 20000); // took a big hit from boss
console.log(health);

// Does the health go up or down - decided when we call the function ✅
// it wont always be 50 up or down. ✅
// if health is greater than 200, health is 200. ✅
// If the health gets to 0, console.log("You died") and set the health back to 100, ready for the next game. ✅
