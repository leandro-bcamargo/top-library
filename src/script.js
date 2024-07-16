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
    bookCard.classList.add('book-card');
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

window.onload = displayBooks();