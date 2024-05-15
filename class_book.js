// Class Declaration
class Book {
  constructor(
    // Parameters
    title,
    author,
    publisher,
    date,
    ISBN
  ) {
    // Properties
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.date = new Date(date);
    this.ISBN = ISBN;
  }
  // Methods
  newTitle(newBookTitle) {
    this.title = newBookTitle;
  }
  newAuthor(newBookAuthor) {
    this.author = newBookAuthor;
  }
  newPublisher(newBookPublisher) {
    this.publisher = newBookPublisher;
  }
  newDate(newBookDate) {
    this.date = newBookDate;
  }
  newISBN(newBookISBN) {
    this.ISBN = newBookISBN;
  }
}

export default Book;
