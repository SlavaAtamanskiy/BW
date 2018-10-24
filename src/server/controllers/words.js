'use strict';

import mongoose from 'mongoose';
import Word from '../models/words.js';

//get all words
module.exports.listWords = function(callback, limit){
   Word.find(callback).limit(limit);
}

//get word
module.exports.getWordById = function(id, callback){
   Word.findById(id, callback);
}

//creates word (with checking title uniquness)
module.exports.createWord = function(word, callback){

  var query = {word:word.word};
  Word.findOne(query, 'word', function(err, obj){
    if(err){
      throw err;
    }
    if(obj===null){
      Word.create(word, callback);
    }
    else{
        callback(false, newWord, true);
    }
  });
}

//delete word
module.exports.deleteWord = function(id, callback){
   var query = {_id:id};
   Word.remove(query, callback);
}

//update word
module.exports.updateWord = function(id, word, options, callback){
   var query = {_id:id};
   var update= {
     word: word.word,
     transcription: word.transcription,
     translation: word.translation,
     book: word.book
   };
   Word.findOneAndUpdate(query, update, options, callback);
}
