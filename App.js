/* eslint-disable prefer-template */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

const myLibrary = [];
const input = document.getElementById("input");
input.style.display = "none";
const btn = document.getElementById("btn");
const addBook = document.getElementById("addBook");

btn.addEventListener("click", () => {
  if (input.style.display === "none") {
    input.style.display = "flex";
    btn.textContent = "cancel";
  } else {
    input.style.display = "none";
    btn.textContent = "New Book";
  }
});
function Book(title, author, pages, status) {
  this.title = document.getElementById("title").value;
  this.author = document.getElementById("author").value;
  this.pages = document.getElementById("pages").value;
  this.status = document.getElementById("status").value;
}
Book.prototype.info = function (book) {
  return (
    this.title +
    " by " +
    this.author +
    ", " +
    this.pages +
    " pages long, " +
    this.status
  );
};
function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}
function buildLibrary() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.id = "card";
    card.textContent = myLibrary[i].info();
    container.appendChild(card);
  }
}
addBook.addEventListener("click", (event) => {
  event.preventDefault();
  const newBook = new Book();
  addBookToLibrary(newBook);
  buildLibrary();
  input.reset();
  input.style.display = "none";
  btn.textContent = "New Book";
});
