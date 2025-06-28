// challenge 15. Create an object representing a book (title, author, pages). Print its properties.

const book = {
    title: "Book1",
    author: "John Doe",
    pages: 204,
    summary: function() {
        return this.title + ", by " + this.author + " has " + this.pages + " pages"; 
    }
}

// console.log(book.summary());