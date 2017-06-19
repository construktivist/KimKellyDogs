const express = require("express");
const path = require("path");

//Server config
const app = express();
const PORT = process.env.PORT || 3000;

//View Engine Setup
app.set("views", path.join(__dirname, "views"));

//Serve static content from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
