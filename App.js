/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const myLibrary = [];
const libraryContainer = document.getElementById("libraryContainer");
const submitButton = document.getElementById("submitButton");

const newBookButton = document.getElementById("newBookButton");
const bookSubmissionForm = document.getElementById("bookSubmissionForm");

function Book() {
  this.title = document.getElementById("title").value;
  this.author = document.getElementById("author").value;
  this.pageCount = document.getElementById("pageCount").value;
  this.status = document.getElementById("status").value;
  this.rating = document.getElementById("rating").value;
}

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}

function printCard(newBook) {
  const card = document.createElement("div");
  card.id = "card";
  const title = document.createElement("div");
  title.textContent = newBook.title;
  card.appendChild(title);

  const author = document.createElement("div");
  author.textContent = newBook.author;
  card.appendChild(author);

  const pageCount = document.createElement("div");
  pageCount.textContent = newBook.pageCount;
  card.appendChild(pageCount);

  const status = document.createElement("div");
  status.textContent = newBook.status;
  card.appendChild(status);

  const rating = document.createElement("div");
  rating.textContent = newBook.rating;
  card.appendChild(rating);
  libraryContainer.appendChild(card);
}

function buildBook() {
  const newBook = new Book();
  addBookToLibrary(newBook);
  printCard(newBook);
  bookSubmissionForm.reset();
  libraryContainer.appendChild(bookSubmissionForm);
  libraryContainer.appendChild(newBookButton);
}

function displayForm() {
  newBookButton.style.display = "none";
  newBookButton.before(bookSubmissionForm);
  bookSubmissionForm.style.display = "grid";
}
newBookButton.addEventListener("click", displayForm);

function hideForm(event) {
  event.preventDefault();
  newBookButton.style.display = "block";
  bookSubmissionForm.style.display = "none";
  buildBook();
}
submitButton.addEventListener("click", hideForm);
