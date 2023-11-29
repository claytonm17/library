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

// Populate books
greatLibrary.addBookToLibrary("Ishmael", "Daniel Quinn", 266, true);
greatLibrary.addBookToLibrary("Sapiens", "Yuval Noah Harari", 581, true);
greatLibrary.addBookToLibrary("The Skeptics Guide to the Universe", "Jay Norvella", 505, false);

// Loop through array to display each book
function displayBooks() {
    for (let i = 0; i < (greatLibrary.getLibrary().length); i++){
        console.log(greatLibrary.getLibrary()[i])
    }
}