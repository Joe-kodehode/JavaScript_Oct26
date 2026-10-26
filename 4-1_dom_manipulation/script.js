// DOM Manipulation

// Section 1: What is the DOM?

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// Section 2: Targeting existing HTML elements us JS.

const heading = document.querySelector("h1");
console.log(heading);

// const button = document.querySelector("#my-button");
const button = document.getElementById("my-button");
console.log(button);

// const listItems = document.querySelectorAll(".list-item");
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);

// Section 3: Changing text or HTML content

// textContent sets or gets the plain text inside an element (no HTML tags)
heading.textContent =
  "<span style='color:blue'>Welcome to the DOM lesson!</span>";

// innerHTML sets or gets the HTML inside an element (can include tags)
heading.innerHTML = "<span style='color:red'>DOM Manipulation</span>";

button.textContent = "Send Form";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// Section 4: Changing styling using JS

heading.style.fontSize = "36px";
heading.style.textTransform = "uppercase";
heading.style.color = "blue";

// Section 5: Create and Add new HTML elements using JS.

// Step 1. Create the element using document.createElement.
// Create a new <p> element
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

// Step 2. Give the element some spice using textContent, classList.add etc
// Set the textContent
newParagraph.textContent = "I was created using JS!";
newParagraph2.textContent = "I was also created using JS!";

// Give it a class
newParagraph.classList.add("new-paragraph");
newParagraph2.classList.add("new-paragraph");

// Step 3. Place it on the page using append, prepend or insertBefore
// document.body.appendChild(newParagraph);
// document.body.appendChild(newParagraph2);
document.body.append(newParagraph, newParagraph2);

console.log(newParagraph);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Prepend, similar to append, but places the element at the start rather than the end.
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I was added to the top of the body!";
document.body.prepend(firstParagraph);

// insertBefore lets us pick an element to insert our new element before
const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm mid";
document.body.insertBefore(midParagraph, button);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to the existing list
// 1. create the element
const newListItem = document.createElement("li");

// 2. give it some spice
newListItem.textContent = "Item 3";
newListItem.classList.add("list-item");

// 3. place it on the page

// target the ul
const list = document.querySelector("#my-list");

// place the new li at the bottom of the ul
list.append(newListItem);

// Section 6: Removing Elements
const firstListItem = document.querySelector("li");
// firstListItem.remove();
list.removeChild(firstListItem);

// Section 7: Targeting elements (parents, children etc)
console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// Section 8: classList Methods

const box = document.querySelector(".box");

// add a class
box.classList.add("blue-box");
box.classList.add("box");

// remove a class
box.classList.remove("blue-box");

// toggle a class
box.classList.toggle("border");
box.classList.toggle("border");
box.classList.toggle("border");
box.classList.toggle("border");

// check if an element has the class, returns true or false
console.log(box.classList.contains("border"));

// Section 9: Creating a list using a loop

// Let's create a list of our favorite movies!

const favoriteMovies = [
  "The Matrix",
  "Backrooms",
  "The Gentlemen",
  "ford vs ferrari",
  "Clue!",
  "The Empire Strikes Back!",
  "Snatch",
  "Spiderman: Brand New Day",
  "My little pony",
];

// make a ul
const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

for (let movie of favoriteMovies) {
  // 1. create the li element (bake the cake)
  const newLi = document.createElement("li");

  // 2. add textContent and a class (decorate the cake)
  newLi.textContent = movie;
  newLi.classList.add("list-item");

  // 3. append our li to the ul (serve the cake)
  movieList.append(newLi);
}

// --------------------------------------
// Summary
// --------------------------------------

// ✅ The DOM is how JavaScript connects to HTML
// ✅ Use querySelector, getElementById, etc. to select elements
// ✅ Use .textContent, .innerHTML, and .style to change content and appearance
// ✅ Use createElement + appendChild / append / prepend / insertBefore to add elements
// ✅ Use removeChild / remove to delete elements
// ✅ DOM has a parent/child/sibling structure you can navigate
// ✅ classList helps manage CSS classes
// ✅ You can attach event listeners like click or mouseover

// Bonus! Clickable button to toggle a class

const toggleButton = document.createElement("button");
toggleButton.textContent = "Click me to change BG color!";
document.body.append(toggleButton);

// add an eventlistener to listen for a click and run a function that toggles the body-background class on our body.
toggleButton.addEventListener(
  "click",

  function () {
    document.body.classList.toggle("body-background");
  },
);
