const myLibrary = []; // array where books are stored

// book constructor
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// function to add a new book to the library
function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook); // Add the new book to the library
}

// select elements
const newBookButton = document.getElementById("newBookButton")
const bookFormDialog = document.getElementById("bookFormDialog")
const bookForm = document.getElementById("bookForm")
const closeFormButton = document.getElementById("closeFormButton")

function displayLibrary() {
  const libraryContainer = document.querySelector(".library-container")

  libraryContainer.innerHTML = "" // makes lib container empty

  myLibrary.forEach((book, index) => { // for each book in the array, execute
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card") // adds a class of book-card

    // specifies bookCard details
    bookCard.innerHTML = ` 
      <h3></h3>
      <p class="card-author">Author: ${book.author}</p>
      <p class="card-title">Title: ${book.title}</p>
      <p class="card-pages">Number of Pages: ${book.pages}</p>
      <p class="card-status">Status: ${book.read}</p>
      <button onclick="removeBook(${index})" class="card-remove-book">Remove</button>
      <button onclick="toggleReadStatus(${index})" class="card-toggle-read-status">Toggle Read Status</button>
    `
    
  libraryContainer.appendChild(bookCard) // appends book card as a child to the parent library container
  })
}

function removeBook(index) {
  myLibrary.splice(index, 1)
  displayLibrary()
}

function toggleReadStatus(index) {
  const book = myLibrary[index]
  book.read = book.read === "read" ? "not read" : "read"
  displayLibrary()
}

newBookButton.addEventListener("click", () => {
  bookFormDialog.showModal()
})

closeFormButton.addEventListener("click", () => {
  bookFormDialog.close()
})

bookForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const author = document.getElementById("author").value
  const title = document.getElementById("title").value
  const pages = document.getElementById("pages").value
  const read = document.getElementById("read").value

  addBookToLibrary(author, title, parseInt(pages), read)

  displayLibrary()

  bookFormDialog.close()
  bookForm.reset()
})

displayLibrary()