const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
}

const newBookButton = document.getElementById("newBookButton")
const bookFormDialog = document.getElementById("bookFormDialog")
const bookForm = document.getElementById("bookForm")
const closeFormButton = document.getElementById("closeFormButton")

function displayLibrary() {
  const libraryContainer = document.querySelector(".library-container")

  libraryContainer.innerHTML = ""

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")

    bookCard.innerHTML = ` 
      <h2>Book ${index + 1}</h2>
        <div class="book-details">
          <p class="card-author">Author: ${book.author}</p>
          <p class="card-title">Title: ${book.title}</p>
          <p class="card-pages">Number of Pages: ${book.pages}</p>
          <p class="card-status">Status: ${book.read}</p>
        </div>
      <button onclick="removeBook(${index})" class="card-remove-book">Remove</button>
      <button onclick="toggleReadStatus(${index})" class="card-toggle-read-status">Toggle Read Status</button>
    `
    
  libraryContainer.appendChild(bookCard)
  })
}

function removeBook(index) {
  myLibrary.splice(index, 1)
  displayLibrary()
}

function toggleReadStatus(index) {
  const book = myLibrary[index]
  book.read = book.read === "Read" ? "Not Read" : "Read"
  displayLibrary()
}

newBookButton.addEventListener("click", () => {
  bookFormDialog.showModal()
  overlay.style.display = 'block';
})

closeFormButton.addEventListener("click", () => {
  bookFormDialog.close()
  overlay.style.display = 'none';
})

addBookButton.addEventListener("click", () => {
  bookFormDialog.close()
  overlay.style.display = 'none';
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

addBookToLibrary("James Clear", "Atomic Habits", 211, "Read")
addBookToLibrary("J.K. Rowling", "Harry Potter", 309, "Read");
addBookToLibrary("George Orwell", "1984", 328, "Not Read");
addBookToLibrary("Harper Lee", "To Kill a Mockingbird", 281, "Read");
addBookToLibrary("F. Scott Fitzgerald", "The Great Gatsby", 180, "Read");
addBookToLibrary("J.R.R. Tolkien", "The Hobbit", 310, "Not Read");

displayLibrary()