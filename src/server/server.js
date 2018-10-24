import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import config from "../config.json";

import bookRoutes from "./routes/books.js";
import book from "./controllers/books.js";
import wordRoutes from "./routes/words.js";
import word from "./controllers/words.js";
import userRoutes from "./routes/users.js";
import user from "./controllers/users.js";

mongoose.Promise = global.Promise;
let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:'*'}));

//connection to database
var connectionPath = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
mongoose.connect(connectionPath, { useNewUrlParser: true }, (err, res) => {
   if (err) throw err;
   console.log('Database online');
});

//creates rest API
bookRoutes.bookRoutes(app, book);
wordRoutes.wordRoutes(app, word);
userRoutes.userRoutes(app, user);

app.listen(PORT, (err) => {
if (err){
  return console.error(err);
}
  return console.log(`Server is listening on port: ${PORT}`);
});
