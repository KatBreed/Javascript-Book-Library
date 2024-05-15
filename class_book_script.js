
import Book from "./class_book.js";

// Library of book objects
const wide_sea = new Book(
  "Wide Wide Sea",
  "Hampton Sides",
  "Micheal Joseph UK",
  "April 11, 2024",
  "9780241437377",
);

const bob_dylan = new Book(
  "Bob Dylan: Mixing Up The Medicine",
  "Mark Davidson",
  "Callaway Editions, U.S",
  "October 25, 2023",
  "9781734537796",
);

const flame_shadow = new Book(
  "House of Flame and Shadow (V3 Crescent City)",
  "Sarah J. Mass",
  "Bloomsbury Publishing PLC",
  "January 30, 2024",
  "9781408884447",
);

const birding = new Book(
  "Birding",
  "Rose Ruane",
  "Corsair/COnstable & Robin",
  "May 2 2024",
  "9781472159182",
)

// Add books to the console
console.log(wide_sea);
console.log(bob_dylan);
console.log(flame_shadow);
console.log(birding);

// Array of book objects
const books = [wide_sea, bob_dylan, flame_shadow, birding];

// Create main element in the body with grid display
const main = document.createElement("main");
main.style.display = 'grid';
main.style.gridTemplateColumns = '1fr 60rem 1fr';

// Create a title heading
const header = document.createElement("h1");
header.textContent = "Book Library";
header.style.fontSize = "3em";
header.style.gridColumn = '2 / 3';
header.style.gridRow = '1';
main.appendChild(header);

// Create navigation
const nav = document.createElement("nav");
nav.style.gridColumn = '2 / 3';
nav.style.gridRow = '2';
nav.style.listStyleType = 'none';
nav.innerHTML = `
  <ul>
    <a href="placeholder.html"><li>Books</li></a>
    <a href="placeholder.html"><li>Authors</li></a>
    <a href="placeholder.html"><li>New Releases</li></a>
  </ul>
`;

// Style the nav
const ul = nav.querySelector('ul');
ul.style.display = 'flex';
ul.style.flexDirection = 'row';
ul.style.alignItems = 'center';
ul.style.justifyContent = 'space-around';

main.appendChild(nav)

// Iterate through each book object
// Create div and display each book
let row = 3;
books.forEach((book) => {
  const bookDiv = document.createElement("div");
  bookDiv.style.display = 'flex';
  bookDiv.style.flexDirection = 'column';
  bookDiv.style.gridColumn = '2 / 3';
  bookDiv.style.gridRow = row.toString();
  bookDiv.innerHTML = `
    <h2><strong>Title:</strong> ${book.title}</h2>
      <ul>
        <li><strong>Author:</strong> ${book.author}</li>
        <li><strong>Publisher:</strong> ${book.publisher}</li>
        <li><strong>Date:</strong> ${book.date}</li>
        <li><strong>ISBN:</strong> ${book.ISBN}</li>
      </ul>
  `;
  main.appendChild(bookDiv);
  row++
});

document.body.appendChild(main);
