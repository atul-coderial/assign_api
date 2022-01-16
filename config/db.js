const mongoose = require('mongoose');

//connecting to the database
mongoose.connect(`mongodb://localhost/result`);
//check for connection
const db = mongoose.connection;
//If error in the connection
db.on("error", console.error.bind(console, "Error to connect the database"));
//If connection is successful
db.once("open", function () {
  console.log("Database is Succesfully connected");
});

module.exports = db;