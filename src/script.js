const myLibrary = [
  new Book("J. R. R. Tolkien","Lord of the Rings", 1000, true, 1954 ), 
  new Book("George Orwell", "1984", 500, false, 1948),
]


function Book(author, title, numPages, hasBeenRead, year) {
  this.author = author;
  this.title = title;
  this.numPages = numPages,
  this.hasBeenRead = hasBeenRead,
  this.year = year;
}

Book.prototype.changeReadStatus = function() {
  this.hasBeenRead = !this.hasBeenRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function handleRemoveBook(e) {
  const indexToRemove = e.target.parentElement.getAttribute('libraryIndex');
  myLibrary.splice(indexToRemove, 1);
  displayBooks();
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    bookCard.setAttribute('libraryIndex', myLibrary.length-1);
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
    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = "Remove";
    removeBookBtn.addEventListener("click", (e) => handleRemoveBook(e));
    const changeReadStatusBtn = document.createElement('button');
    changeReadStatusBtn.textContent = book.hasBeenRead ? "Mark as Unread" : "Mark as Read";
    changeReadStatusBtn.addEventListener("click", (e) => handleChangeReadStatus(e, book));

    bookCard.append(author, title, numPages, hasBeenRead, year, removeBookBtn, changeReadStatusBtn);

    return bookCard;
}

function handleChangeReadStatus(e, book) {
  console.log('changed')
  book.changeReadStatus();
  displayBooks();
}

function displayBooks() {
  const books = document.querySelector("#books");
  books.innerHTML = "";
  for (let book of myLibrary) {
    const bookCard = createBookCard(book);
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

  addBookToLibrary(newBook);
}

window.onload = displayBooks();