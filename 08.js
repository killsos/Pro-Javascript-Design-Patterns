var Book = function (newIsbn, newTitle, newAuthor) {
  // private attributes

  var isbn, title, author;

  // private method
  function checkIsbn() {

  }

  // privileged methods
  this.getIsbn = function () {
      return isbn;
  }
}

// Public
Book.prototype = {
    display: function () {
        
    }
};

