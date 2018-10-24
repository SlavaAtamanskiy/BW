'use strict';

function wordRoutes(app, word){

  //app.get creates "GET" method. Params: slash represents home page
  //and this page will run the function in parameter number 2
  app.get('/', function(request, response){
      response.send('Home page');
  });

  //gets list of words
  app.get('/words', function(request, response){
      word.listWords(function(err, words){
         if(err){
           throw err;
         }
         response.json(words);
      });
  });

  //gets one word by id
  app.get('/words/:_id', function(request, response){
      word.getWordById(request.params._id, function(err, Word){
         if(err){
           throw err;
         }
         response.json(Word);
      });

  });

 //creates a new word
 app.post('/words', function(request, response){

    var newWord = request.body;
    var exeption = false;
    word.createWord(newWord, function(err, newWord, exeption){

       if(err){
         throw err;
       }
       //variable exception stands for the case when a word with the specified name already exists
       //it indicates that there is not need to add a word with the same name
       if (exeption) {
         response.setHeader('cache-control', 'no-cache');
         response.statusCode = 400;
         response.end(`Word ${newWord.word} already exists.`);
       }
       else {
         response.json(newWord);
       }

      });
 });

 //updates word by id
 app.put('/words/:_id', function(request, response){
     var id = request.params._id;
     var thisWord = request.body;
     word.updateWord(id, thisWord, {}, function(err, thisWord){
        if(err){
          throw err;
        }
        response.json(thisWord);
     });
 });

//deletes a word by id
app.delete('/words/:_id', function(request, response){
    var id = request.params._id;
    word.deleteWord(id, function(err, Word) {
       if(err){
         throw err;
       }
       response.json(Word);
    });
});

}

module.exports.wordRoutes = wordRoutes;
