const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//App controllers
// const admin_controller = require("./src/admin/admin_controller")
const client_controller = require("./src/client/client_controller")
// const testimonial_controller = require("./src/testimonial/testimonial_controller")

//Server config
const app = express();
const PORT = process.env.PORT || 3000;

//View Engine Setup
app.set("views", path.join(__dirname, "views"));

//Route controllers
// app.use("/admin", admin_controller)
app.use("/client", client_controller)
// app.use("/testimonial", testimonial_controller)

//Database config
mongoose.connect(/*NEED TO ADD REMOTE ENV HERE*/ "mongodb://localhost/kimkellydogs_db");
const db = mongoose.connection;

db.on("error", function(err){
  console.log("There was a Mongoose error: ", err)
});

db.once("open", function(){
  console.log("Mongoose connection successful.")
});

//Serve static content from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

//Initial Route for react-router browserHistory
app.get('*', function (request, response){
  response.sendFile('public/index.html', { root: __dirname })
})

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
