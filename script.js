const myLibrary = [];

function Book(title, author, numPages, year, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.year = year;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLastCreatedBook() {
  createCard(myLibrary[myLibrary.length - 1])
}

function createCard(contents) {
    const elements = createCardElements();
    setCardElementsContent(elements, contents);
    buildCard(elements);
}

function createCardElements() {
    const panel = document.getElementById('book-panel');
    const card = document.createElement('div');
    const titleEl = document.createElement('h3');
    const authorEl = document.createElement('p');
    const numPagesEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const isReadEl = document.createElement('p');
    return {panel, card, titleEl, authorEl, numPagesEl, yearEl, isReadEl};
}

function setCardElementsContent(elements, contents) {
    const {titleEl, authorEl, numPagesEl, yearEl, isReadEl} = elements;
    const {title, author, numPages, year, isRead} = contents;
    console.log('contents:', contents)
    titleEl.textContent = title;
    authorEl.textContent = author;
    numPagesEl.textContent = numPages;
    yearEl.textContent = year;
    isReadEl.textContent = isRead;
}

function buildCard(elements) {
    const {panel, card, titleEl, authorEl, numPagesEl, yearEl, isReadEl} = elements;
    console.log('elements:', elements)
    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(numPagesEl);
    card.appendChild(yearEl);
    card.appendChild(isReadEl);
    console.log('card:', card)
    panel.appendChild(card);
}

function setEventListeners() {
  setNewBookEventListener();
  setCreateBookEventListener();
}

function setNewBookEventListener() {
  const newBookBtn = document.getElementById('new-book-btn');
  newBookBtn.addEventListener('click', toggleForm);
}

function toggleForm() { 
  const dialog = document.getElementById('form-dialog'); 
  const newBookBtn = document.getElementById('new-book-btn');
  
  if (dialog.hasAttribute('open')) {
    dialog.removeAttribute('open'); 
    newBookBtn.innerText = 'New Book';
  } else { 
    dialog.setAttribute('open', true)
    newBookBtn.innerText = 'Cancel';
  } 
}

function getTitle() {
  return document.getElementById('title').value;
}

function getAuthor() {
  return document.getElementById('author').value;
}

function getNumPages() {
  return document.getElementById('num-pages').value;
}

function getYear() {
  return document.getElementById('year').value;
}

function getIsRead() {
  return document.getElementById('is-read').checked ? 'Read' : 'Not Read'
}

function getFormData() {
  return new Book(
    getTitle(),
    getAuthor(),
    getNumPages(),
    getYear(),
    getIsRead()
  );
}

function setCreateBookEventListener() {
  const createBookBtn = document.getElementById('create-book-btn');
  createBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const book = getFormData();
    addBookToLibrary(book);
    displayLastCreatedBook();
  })
}

window.onload = function() {
  setEventListeners();
}