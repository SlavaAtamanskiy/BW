'use strict';

import mongoose from 'mongoose';
import Book from '../models/books.js';

//get all books
module.exports.listBooks = function(callback, limit){
   Book.find(callback).limit(limit);
}

//get book
module.exports.getBookById = function(id, callback){
   Book.findById(id, callback);
}

//creates book (with checking title uniquness)
module.exports.createBook = function(book, callback){

  var query = {title:book.title};
  Book.findOne(query, 'title', function(err, obj){
    if(err){
      throw err;
    }
    if(obj===null){
      Book.create(book, callback);
    }
    else{
        callback(false, newBook, true);
    }
  });
}

//delete book
module.exports.deleteBook = function(id, callback){
   var query = {_id:id};
   Book.remove(query, callback);
}

//update book
module.exports.updateBook = function(id, book, options, callback){
   var query = {_id:id};
   var update= {
     title:book.title,
     author:book.author,
     pages:book.pages
   };
   Book.findOneAndUpdate(query, update, options, callback);
}
