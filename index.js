const greatLibrary = (function(){
    let myLibrary = [];

    class Book {
        constructor(
            title = 'Unknown', 
            author = 'Unknown',
            pages = 0,
            isRead = false
        ) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.isRead = isRead;
        }
    }
    
    function addBookToLibrary(title, author, pages, isRead) {
        const newBook = new Book(title, author, pages, isRead);
        myLibrary.push(newBook);
    }

    function removeBook(title) {
        myLibrary = myLibrary.filter(book => book.title !== title);
    }

    return {
        addBookToLibrary,
        removeBook,
        getLibrary: () => myLibrary.slice()
    }

})();

// Populate books (Highly recommend these!)
//greatLibrary.addBookToLibrary("Ishmael", "Daniel Quinn", 266, true);
//greatLibrary.addBookToLibrary("Sapiens", "Yuval Noah Harari", 581, true);
//greatLibrary.addBookToLibrary("The Skeptics Guide to the Universe", "Jay Norvella", 505, false);

// Loop through array to display each book
function displayAllBooks() {
    while (shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
    }
    for (let i = 0; i < (greatLibrary.getLibrary().length); i++){
        createBookContainer(greatLibrary.getLibrary()[i]);
    }
}

let shelf = document.querySelector('.library');

// Create book tab
const createBookContainer = (book) => {
    // Ensure a title
    if (!book.title){
        return
    }

    const bookContainer = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    const buttons = document.createElement('button');
   
    title.textContent = `${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;
    buttons.textContent = 'Delete';

    buttons.classList.add('delete-button');
    bookContainer.classList.add('book-container');
    if (book.isRead === true) {
        read.classList.add('yes-read');
    } else {
        read.classList.add('not-read');
    }

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
    bookContainer.appendChild(buttons);

    shelf.appendChild(bookContainer);
}

const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

const formContainer = document.querySelector('.form-container');
formContainer.style.display = 'none';

const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', () => {
    clearForm();
})

formContainer.addEventListener('submit', function(event) {
    event.preventDefault()
    // Get input values
    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    const pages = document.getElementById('pages-input').value;
    const isRead = document.getElementById('yes-input').checked;

    greatLibrary.addBookToLibrary(title, author, pages, isRead);

    // Resetting the form and displaying all books
    clearForm();
    displayAllBooks();
})

const clearForm = () => {
    document.getElementById('title-input').value = '';
    document.getElementById('author-input').value = '';
    document.getElementById('pages-input').value = '';
    document.getElementById('yes-input').checked = false;
    formContainer.style.display = 'none';
}

// Delete button
shelf.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const bookTitle = event.target.parentElement.querySelector('h2').textContent;
        greatLibrary.removeBook(bookTitle);
        displayAllBooks();
    }
})