// Conditionals

// if / else if / else

//  basic if statement

let temperature = "hello";

if (temperature > 25) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("it's a warm day");
} else if (temperature > 0) {
  console.log("it's a chilly day");
} else if (temperature <= 0) {
  console.log("it's freezing!");
} else {
  console.log("an error has occured");
}

// Logical Operators && (AND)  || (OR)

let age = 1;
let hasLicence = true;
let points = 0;

// if (age >= 18) {
//   console.log("You are old enough to drive");
// }

// if (hasLicence === true) {
//   console.log("You have your licence");
// }

// AND &&
if (age >= 18 && hasLicence && points < 8) {
  console.log("You are allowed to drive");
} else {
  console.log("You aren't allowed to drive!");
}

// OR ||
let day = "Hamburger";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! yipee!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday");
} else {
  console.log("Error! Invalid day detected!");
}

// Using both && and || in the same conditional

let referal = false;
let firstShop = true;
let premiumMember = false;

// if the user has a referal and it's their first shop, they get a discount.
// premium members ALWAYS get a discount

if ((referal && firstShop) || premiumMember) {
  console.log("You get a discount!");
} else {
  console.log("No discount, consider becoming a premium member");
}

// Ternary - often used instead of simple if / else

let isMember = true;

// if the user is a member, they pay 50kr delivery otherwise it's 100kr

// if (isMember) {
//   console.log("Delivery: 50kr");
// } else {
//   console.log("Delivery 100kr");
// }

let deliveryCost = isMember ? "50kr" : "100kr";

console.log("Delivery:", deliveryCost);

// Switch statement

// A switch statement checks a value against multiple cases

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apples are delicious!");
    break;
  case "banana":
    console.log("Bananas are a great source of potassium!");
    break;
  case "orange":
    console.log("Oranges are full of vitamin C!");
    break;
  default:
    console.log("Unknown fruit detected");
}

// Use if / else if → for complex or varied conditions
// Use switch → for one variable with many fixed values

// Truthy & Falsey

let value = NaN;

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

// Template String

const firstName = "Ola";
const lastName = "Nordmann";
const city = "Oslo";
const country = "Norway";

console.log(
  "Welcome!" +
    " " +
    firstName +
    " " +
    lastName +
    " " +
    "from" +
    " " +
    city +
    " " +
    country +
    " " +
    "to my site!",
);

// shift + `
console.log(
  `Welcome! ${firstName} ${lastName} from ${city} ${country} to my site!`,
);
