/* eslint-disable func-names */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const myLibrary = [];
const libraryContainer = document.getElementById("bookContainer");
const bookContainer = document.getElementById("bookContainer");
function Book(title, author, length, readStatus) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.readStatus = readStatus;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.length}, ${this.readStatus}`;
};

const theHobbit = new Book("The Hobbit", "JRR Tolkein", "295 pages", "No");
const theHobbit2 = new Book("The Hobbit2", "JRR Tolkein2", "295 pages2", "No2");
const theHobbit3 = new Book("The Hobbit3", "JRR Tolkein3", "295 pages3", "No3");
const theHobbit4 = new Book("The Hobbit4", "JRR Tolkein4", "295 pages4", "No4");
const theHobbit5 = new Book("The Hobbit5", "JRR Tolkein5", "295 pages5", "No5");
const theHobbit6 = new Book("The Hobbit6", "JRR Tolkein6", "295 pages6", "No6");

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);
addBookToLibrary(theHobbit4);
addBookToLibrary(theHobbit5);
addBookToLibrary(theHobbit6);

function buildTitle(libraryBook, i) {
  const title = document.createElement("div");
  title.id = "title";
  title.textContent = `Title: ${myLibrary[i].title}`;
  libraryBook.appendChild(title);
}
function buildAuthor(libraryBook, i) {
  const author = document.createElement("div");
  author.id = "author";
  author.textContent = `Written By: ${myLibrary[i].author}`;
  libraryBook.appendChild(author);
}
function buildLength(libraryBook, i) {
  const length = document.createElement("div");
  length.id = "length";
  length.textContent = `Length: ${myLibrary[i].length}`;
  libraryBook.appendChild(length);
}
function buildReadStatus(libraryBook, i) {
  const readStatus = document.createElement("div");
  readStatus.id = "readStatus";
  readStatus.textContent = `Read? ${myLibrary[i].readStatus}`;
  libraryBook.appendChild(readStatus);
}

function buildNewBookButton() {
  const newBookButton = document.createElement("img");
  newBookButton.id = "newBookButton";
  newBookButton.setAttribute("src", "img/noun-add-book-111365.svg");
  newBookButton.setAttribute("alt", "add book");
  libraryContainer.appendChild(newBookButton);
  newBookButton.addEventListener("click", () => {
    const bookSubmission = document.getElementById("bookSubmission");
    bookSubmission.style.display = "grid";
    bookContainer.append(bookSubmission);
    newBookButton.style.display = "none";
  });
}
function noSubmit(event) {
  event.preventDefault();
}

function buildBook() {
  const addBook = document.getElementById("addBook");
  addBook.addEventListener("hover", () => {
    addBook.style.color = "coral";
  });
}

function buildLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    const libraryBook = document.createElement("div");
    libraryBook.id = "libraryBook";
    libraryContainer.appendChild(libraryBook);
    buildTitle(libraryBook, i);
    buildAuthor(libraryBook, i);
    buildLength(libraryBook, i);
    buildReadStatus(libraryBook, i);
    if (i === myLibrary.length - 1) {
      buildNewBookButton();
    }
  }
}

buildLibrary(myLibrary);
