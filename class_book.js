// Class Declaration
class Book {
  constructor(
    // Parameters
    title,
    author,
    publisher,
    date,
    category,
    format,
    ISBN,
    price,
    currency
  ) {
    // Properties
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.date = new Date(date);
    this.category = category;
    this.format = format;
    this.ISBN = ISBN;
    this.price = price;
    this.currency = currency;
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
  newCategory(newBookCategory) {
    this.category = newBookCategory;
  }
  newFormat(newBookFormat) {
    this.format = newBookFormat;
  }
  newISBN(newBookISBN) {
    this.ISBN = newBookISBN;
  }
  newPrice(newBookPrice) {
    this.price = newBookPrice;
  }
  newCurrency(newBookCurrency) {
    this.currency = newBookCurrency;
  }
}

export default Book;
