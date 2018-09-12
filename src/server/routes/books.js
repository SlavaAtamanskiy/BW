'use strict';

function bookRoutes(app, book){

  //app.get creates "GET" method. Params: slash represents home page
  //and this page will run the function in parameter number 2
  app.get('/', function(request, response){
      response.send('Home page');
  });

  //gets list of books
  app.get('/books', function(request, response){
      book.listBooks(function(err, books){
         if(err){
           throw err;
         }
         response.json(books);
      });
  });

  //gets one book by id
  app.get('/books/:_id', function(request, response){
      book.getBookById(request.params._id, function(err, Book){
         if(err){
           throw err;
         }
         response.json(Book);
      });

  });

 //creates a new book
 app.post('/books', function(request, response){
    
    var newBook = request.body;
    var exeption = false;
    book.createBook(newBook, function(err, newBook, exeption){

       if(err){
         throw err;
       }
       //variable exception stands for the case when a book with the specified name already exists
       //it indicates that there is not need to add a book with the same name
       if (exeption) {
         response.setHeader('cache-control', 'no-cache');
         response.statusCode = 400;
         response.end(`Book ${newBook.title} already exists.`);
       }
       else {
         response.json(newBook);
       }

      });
 });

 //updates book by id
 app.put('/books/:_id', function(request, response){
     var id = request.params._id;
     var thisBook = request.body;
     book.updateBook(id, thisBook, {}, function(err, thisBook){
        if(err){
          throw err;
        }
        response.json(thisBook);
     });
 });

//deletes a book by id
app.delete('/books/:_id', function(request, response){
    var id = request.params._id;
    book.deleteBook(id, function(err, Book) {
       if(err){
         throw err;
       }
       response.json(Book);
    });
});

}

module.exports.bookRoutes = bookRoutes;
