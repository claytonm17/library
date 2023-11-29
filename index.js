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
greatLibrary.addBookToLibrary("Ishmael", "Daniel Quinn", 266, true);
greatLibrary.addBookToLibrary("Sapiens", "Yuval Noah Harari", 581, true);
greatLibrary.addBookToLibrary("The Skeptics Guide to the Universe", "Jay Norvella", 505, false);

// Loop through array to display each book
function displayBooks() {
    for (let i = 0; i < (greatLibrary.getLibrary().length); i++){
        console.log(greatLibrary.getLibrary()[i]);
        createBookContainer(greatLibrary.getLibrary()[i]);
    }
}

// Event listener for add book button
let addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
    console.log('click')
});

let shelf = document.querySelector('.library');

// Create book tab
const createBookContainer = (book) => {
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

    bookContainer.classList.add('book-container');

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
    bookContainer.appendChild(buttons);

    shelf.appendChild(bookContainer);
}

displayBooks()