'use strict';

import mongoose from 'mongoose';

//word schema
let _schema = new mongoose.Schema({

   word:{
   type: String,
   required: true
   },

   transcription:{
     type: String,
     required: false
   },

   translation:{
     type: String,
     required: true
   },

   book:{
     type: String
   },

   creation_date:{
     type: Date,
     default: Date.now()
   }

});

module.exports = mongoose.model("Word", _schema);
