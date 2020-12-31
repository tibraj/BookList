function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {

}

document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault();
    console.log('test');
}) 