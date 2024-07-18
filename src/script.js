const myLibrary = [
  {
    author: "J. R. R. Tolkien",
    title: "Lord of the Rings",
    numPages: 1000,
    hasBeenRead: true,
    year: 1954,
  },
  {
    author: "George Orwell",
    title: "1984",
    numPages: 500,
    hasBeenRead: false,
    year: 1948,
  }
];

function Book(author, title, numPages, hasBeenRead, year) {
  this.author = author;
  this.title = title;
  this.numPages = numPages,
  this.hasBeenRead = hasBeenRead,
  this.year = year;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log('myLibrary:', myLibrary)
  displayBooks();
}

function displayBooks() {
  const books = document.querySelector("#books");
  books.innerHTML = "";
  for (let book of myLibrary) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    const author = document.createElement('p');
    author.innerHTML = book.author;

    const title = document.createElement('h3');
    title.innerText = book.title;

    const numPages = document.createElement('p');
    numPages.innerHTML = `${book.numPages} pages`;

    const hasBeenRead = document.createElement('p');
    hasBeenRead.innerHTML = book.hasBeenRead ? "Read" : "Not Yet Read";

    const year = document.createElement('p');
    year.innerHTML = book.year;

    bookCard.append(author, title, numPages, hasBeenRead, year);
    const booksDiv = document.querySelector('#books');
    booksDiv.appendChild(bookCard);
  }
}

const addNewBookBtn = document.getElementById('addNewBookBtn');
const formContainer = document.getElementById('bookFormContainer');
const form = document.createElement('form');

addNewBookBtn.addEventListener('click', () => {
  createForm();
});


function createForm() {
  form.innerHTML = `
    <label for="author">Author:</label>
    <input type="text" id="author" name="author">

    <label for="title">Title:</label>
    <input type="text" id="title" name="title">

    <label for="numPages">Number of pages:</label>
    <input type="number" id="numPages" name="numPages">

    <div class="horizontal">
      <label for="hasBeenRead">Has been read?</label>
      <input type="checkbox" name="hasBeenRead" id="hasBeenRead">   
    </div>

    <label for="year">Publishing year:</label>
    <input type="number" name="year" id="year">

    <button type="submit" id="saveBookBtn">Save Book</button>
  `
  formContainer.appendChild(form);
  const submitBtn = document.querySelector("#saveBookBtn");
  submitBtn.addEventListener("click", (e) => {
    handleSaveBook(e);
  })
}

function handleSaveBook(e) {
  e.preventDefault();
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const numPages = document.querySelector("#numPages").value;
  const hasBeenRead = document.querySelector("#hasBeenRead").value;
  const year = document.querySelector("#year").value;
  const newBook = new Book(
    author,
    title,
    numPages,
    hasBeenRead,
    year,
  );
  console.log("newBook:", newBook)
  addBookToLibrary(newBook);
}

window.onload = displayBooks();