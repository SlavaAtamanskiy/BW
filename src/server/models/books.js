'use strict';

import mongoose from 'mongoose';

//book schema
let _schema = new mongoose.Schema({
   title:{
   type: String,
   required: true
   },
   author:{
     type: String,
     required: true
   },
   pages:{
     type: Number
   },
   creation_date:{
     type: Date,
     default: Date.now()
   }
});

module.exports = mongoose.model("Book", _schema); 
