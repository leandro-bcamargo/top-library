const myLibrary = [
  {
    title: "Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1948,
  }
];

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  for (let book of myLibrary) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    const title = document.createElement('h3');
    title.innerText = book.title;
    const author = document.createElement('p');
    author.innerHTML = book.author;
    const year = document.createElement('p');
    year.innerHTML = book.year;
    bookCard.append(title, author, year);
    const booksDiv = document.querySelector('#books');
    booksDiv.appendChild(bookCard);
  }
}

const addNewBookBtn = document.getElementById('addNewBookBtn');
const formContainer = document.getElementById('bookFormContainer');

addNewBookBtn.addEventListener('click', () => {
  createForm();
});


function createForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <label for="title">Title:</label>
    <input type="text" id="title" name="title">

    <label for="author">Author:</label>
    <input type="text" id="author" name="author">

    <label for="numPages">Number of pages:</label>
    <input type="number" id="numPages" name="numPages">

    <div class="horizontal">
      <label for="hasBeenRead">Has been read?</label>
      <input type="checkbox" name="hasBeenRead" id="hasBeenRead">   
    </div>

    <label for="year">Publishing year:</label>
    <input type="number" name="year" id="year">
  `
  formContainer.appendChild(form);
}

window.onload = displayBooks();