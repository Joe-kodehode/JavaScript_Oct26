// Lesson 3: Recap of JS Basics

// Section 1: Variables, Data Types and Operators

// Scenario: An online store managing products.

const storeName = "Tech Haven"; // string
const productName = "Wireless Earbuds"; // string
let productPrice = 900; // number
let productQuantity = 4; // number
let isInStock = true; // boolean
const productTags = ["audio", "wireless", "accessory"]; // array
let discount;

console.log(productTags);
console.log(productTags[1]);
console.log(discount);

// Arithmetic operations
let totalValue = productPrice * productQuantity; // multiplication
console.log(totalValue);

// Compound assignment (changing value)
productPrice = productPrice + 50; // ❌
productPrice += 50; //  ✅
productPrice -= 200; //  ✅
console.log(productPrice);

// Increment and Decrement operators
// Sell 1 product
productQuantity -= 1; // ❌
productQuantity--; //  ✅
productQuantity++;

console.log(productQuantity);

// Checking the change to the totalValue after chaning price / quantity
totalValue = productPrice * productQuantity;
console.log(totalValue);

// Find the remainder when total cost is divided by 50
const remainder = totalValue % 50;
console.log(remainder);

// Section 2: Conditionals and Logical Operators

let basketSize = 4500;

// console.log a message to the user based on their basket size.
// if the basket size is over 3000, we tell the user they qualify for free delivery
// if the basket size is over 2500, we tell the user they are close to free delivery
// if the basket size is under 2500, we tell them they would qualify for free delivery if they spend over 3000

if (basketSize > 3000) {
  console.log("You qualify for free delivery!");
} else if (basketSize > 2500) {
  console.log("You are close to free delivery!");
} else {
  console.log("Spend over 3000 to get loser to free delivery!");
}

// Logical AND && and Logical OR ||

// Scenario: Show a discount message "You get a 15% discount" if the product is in stock AND the product is either on discount OR the quantity is over 200. Otherwise give the message "no discount applied"

isInStock = false;
productQuantity = 250;
discount = true;

if (isInStock && (discount || productQuantity >= 200)) {
  console.log("You get a 15% discount");
} else {
  console.log("No discount applied");
}

// Ternary
// Scenario: if the basket size is over 5000, console log "free shipping" otherwise console log "500kr shipping fee"

basketSize += 1000;
console.log(basketSize);

const shippingFee = basketSize >= 5000 ? "free shipping" : "500kr shipping fee";

console.log(shippingFee);

// Switch Statement
let category = "kitchen";

switch (category) {
  case "audio":
    console.log("This product is in our Audio department");
    break;
  case "accessory":
    console.log("This product is in our Accessories section");
    break;
  case "gadget":
    console.log("this product belongs to our Gadgets collection");
    break;
  default:
    console.log("This product is from a general category");
}

// Section 3: typeof

console.log(typeof basketSize);
console.log(typeof storeName);
console.log(typeof discount);

// Section 4: truthy and falsey

let value = "";

if (value) {
  console.log("The value is true!");
} else {
  console.log("The value is false!");
}

// True
// A string with value
// A positive number
// A negative number
// An array with values inside
// An empty array
// An object with key value pairs
// An empty object

// False
// A string with no value inside
// The number 0
// Null
// Undefined
// NaN (not a number)

// Section 5: Template Strings

const firstName = "Alex";
const lastName = "Miller";
const city = "London";
const country = "England";

// const welcomeMessage =
//   "Welcome," + " " + firstName + " " + lastName + "! Enjoy shopping with us.";

// Hard-coded vs Soft-coded (dynamic)
const welcomeMessage = `Welcome ${firstName} ${lastName}! From ${city}, ${country}. Enjoy shopping with us.`;

console.log(welcomeMessage);

// Section 6: Combining ternary and template strings

basketSize = 1000;

const discountApplied = basketSize > 5000;

const basketMessage = `You ${discountApplied ? "are" : "aren't"} eligible for free delivery`;

console.log(basketMessage);
