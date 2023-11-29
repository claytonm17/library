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

greatLibrary.addBookToLibrary("Ishmael", "Daniel Quinn", 266, true);
greatLibrary.addBookToLibrary("Ishmael2", "Daniel Quinn2", 267, false);