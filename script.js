const myLibrary = [];

function Book(title, author, numPages, year, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.year = year;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, numPages, year, isRead) {
    myLibrary.push(new Book(title, author, numPages, year, isRead));
}

// function displayBooks() {
//     myLibrary.forEach(book => )
// }

function createCard(contents) {
    const elements = createCardElements();
    setCardElementsContent(elements, contents);
    buildCard(elements);
    
}

function createCardElements() {
    const panel = document.getElementById('panel');
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
    titleEl.textContent = title;
    authorEl.textContent = author;
    numPagesEl.textContent = numPages;
    yearEl.textContent = year;
    isReadEl.textContent = isRead;
}

function buildCard(elements) {
    const {panel, card, titleEl, authorEl, numPagesEl, yearEl, isReadEl} = elements;
    panel.appendChild(card);
    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(numPagesEl);
    card.appendChild(yearEl);
    card.appendChild(isReadEl);
}

function setEventListeners() {
  setNewBookEventListener();
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
    dialog.setAttribute('open', null)
    newBookBtn.innerText = 'Cancel';
  } 
}

window.onload = function() {
  setEventListeners();
}