'use strict';

function userRoutes(app, user){

  //app.get creates "GET" method. Params: slash represents home page
  //and this page will run the function in parameter number 2
  app.get('/', function(request, response){
      response.send('Home page');
  });

  //gets list of users
  app.get('/users', function(request, response){
      user.listUsers(function(err, users){
         if(err){
           throw err;
         }
         response.json(users);
      });
  });

  //gets one user by id
  app.get('/users/:_id', function(request, response){
      user.getUserById(request.params._id, function(err, User){
         if(err){
           throw err;
         }
         response.json(User);
      });

  });

 //creates a new user
 app.post('/users', function(request, response){

    var newUser = request.body;
    var exeption = false;
    user.createUser(newUser, function(err, newUser, exeption){

       if(err){
         throw err;
       }
       //variable exception stands for the case when a user with the specified name already exists
       //it indicates that there is not need to add a user with the same name
       if (exeption) {
         response.setHeader('cache-control', 'no-cache');
         response.statusCode = 400;
         response.end(`User ${newUser.username} already exists.`);
       }
       else {
         response.json(newUser);
       }

      });
 });

 //updates user by id
 app.put('/users/:_id', function(request, response){
     var id = request.params._id;
     var thisUser = request.body;
     user.updateUser(id, thisUser, {}, function(err, thisUser){
        if(err){
          throw err;
        }
        response.json(thisUser);
     });
 });

//deletes a user by id
app.delete('/users/:_id', function(request, response){
    var id = request.params._id;
    user.deleteUser(id, function(err, User) {
       if(err){
         throw err;
       }
       response.json(User);
    });
});

}

module.exports.userRoutes = userRoutes;
