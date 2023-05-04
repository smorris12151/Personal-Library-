/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const myLibrary = [];
const libraryContainer = document.getElementById("libraryContainer");

function Book(title, author, length, status, rating) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.staus = status;
  this.rating = rating;
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.length}, ${this.status}`;
};

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}

function buildTitle() {
  const title = document.createElement("div");
  title.textContent = document.getElementById("title").value;
  return title.textContent;
}

function buildAuthor() {
  const author = document.createElement("div");
  author.textContent = document.getElementById("author").value;
  return author.textContent;
}
function buildPageCount() {
  const pageCount = document.createElement("div");
  pageCount.textContent = document.getElementById("pageCount").value;
  return pageCount.textContent;
}
function buildStatus() {
  const status = document.createElement("div");
  status.textContent = document.getElementById("status").value;
  return status.textContent;
}

function buildRating() {
  const rating = document.createElement("div");
  rating.textContent = document.getElementById("rating").value;
  return rating.textContent;
}

function printCard() {
  const card = document.createElement("div");
  card.id = "card";
  const title = document.createElement("div");
  title.id = "title";
  title.textContent = buildTitle();
  card.appendChild(title);

  const author = document.createElement("div");
  author.id = "author";
  author.textContent = buildAuthor();
  card.appendChild(author);

  const pageCount = document.createElement("div");
  pageCount.id = "pageCount";
  pageCount.textContent = buildPageCount();
  card.appendChild(pageCount);

  const status = document.createElement("div");
  status.id = "status";
  status.textContent = buildStatus();
  card.appendChild(status);

  const rating = document.createElement("div");
  rating.id = "rating";
  rating.textContent = buildRating();
  card.appendChild(rating);

  libraryContainer.appendChild(card);
}
function buildBook() {
  const newBook = new Book(
    buildTitle(),
    buildAuthor(),
    buildPageCount(),
    buildStatus(),
    buildRating()
  );
  addBookToLibrary(newBook);
  printCard();
  // alert(myLibrary[myLibrary.length - 1].author);
}
