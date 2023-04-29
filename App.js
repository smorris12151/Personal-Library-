/* eslint-disable no-unused-vars */
const myLibrary = [];

function Book(title, author, length, readStatus) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  if (!myLibrary.includes(book)) {
    myLibrary.push(book);
  }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkein", "295 pages", "No");
const theHobbit2 = new Book("The Hobbit2", "JRR Tolkein2", "295 pages2", "No2");
const theHobbit3 = new Book("The Hobbit3", "JRR Tolkein3", "295 pages3", "No3");
