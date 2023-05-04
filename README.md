# Personal-Library-

Library project from The Odin Project's JS course, practicing using objects and constructors to create a personal library app to track your reading.
image credits:

    book svg from thenounproject.com:
        Add Book by Creative Stall from <a href="https://thenounproject.com/browse/icons/term/add-book/" target="_blank" title="Add Book Icons">Noun Project</a>

Pseudo:

//input form gives data to individual constructors. On submit, form dissapears and is replaced by finished card. New book button repopulates to the right of the new card.
//individual constructors output data into master book constructor
//that constructor calls each constructor function, and sets each output to a new const variable - title, author, lenght, status, rating
//these constants are then input into the Book function to build a new Book Object
//that new book object is then added to the myLibrary array
//a card print function then takes the info from the latest myLibrary array entry (.length-1) and builds a card for that entry

//function masterConstructor(title, author, length, status, rating){
//const title = buildTitle()
// const author = buildAuthor()
// const length = buildLength()
// const status = buildStatus()
// const rating = buildRating()
// const newBook = new Book(title, author, length, status, rating)
// addBookToLibrary(newBook)
// printCard()
//}

// when clicking the addBookButton:
//function displayForm(){
// addBookButton.style.display = none
//const inputForm = document.createElementfromID('booksubmission')
//bookContainer.amendChild(inputForm)
//inputForm.style.display=grid

//} that should make the button go away, and the form appear in its place
