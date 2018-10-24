'use strict';

import mongoose from 'mongoose';
import User from '../models/users.js';

//get all users
module.exports.listUsers = function(callback, limit){
   User.find(callback).limit(limit);
}

//get user
module.exports.getUserById = function(id, callback){
   User.findById(id, callback);
}

//creates user (with checking username uniquness)
module.exports.createUser = function(user, callback){

  var query = {username:user.username};
  User.findOne(query, 'username', function(err, obj){
    if(err){
      throw err;
    }
    if(obj===null){
      User.create(user, callback);
    }
    else{
        callback(false, newUser, true);
    }
  });
}

//delete user
module.exports.deleteUser = function(id, callback){
   var query = {_id:id};
   User.remove(query, callback);
}

//update user
module.exports.updateUser = function(id, user, options, callback){
   var query = {_id:id};
   var update= {
     firstname: user.firstname,
     middlename: user.middlename,
     lastname: user.lastname,
     username: user.username,
     password: user.password,
     age: user.age,
     gender: user.gender
   };
   User.findOneAndUpdate(query, update, options, callback);
}
