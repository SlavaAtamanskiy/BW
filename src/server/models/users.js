'use strict';

import mongoose from 'mongoose';

//user schema
let _schema = new mongoose.Schema({

   firstname:{
   type: String,
   required: true
   },
   
   middlename:{
   type: String,
   required: true
   },

   lastname:{
     type: String,
     required: true
   },

   username:{
     type: String,
     required: true
   },

   password:{
     type: String,
     required: true
   },

   age:{
     type: Number
   },

   gender:{
     type: String,
   },

   creation_date:{
     type: Date,
     default: Date.now()
   }

});

module.exports = mongoose.model("User", _schema);
