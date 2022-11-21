//start require modules
const express = require("express");
const res = require("express/lib/response");
const hbs = require("hbs");

//myModule
/*
exports.x = "some string";
exports.heading = "World Cup 2022";
exports.score =  "2-0";
*/
const myModule = require("./my-module");
console.log(myModule.heading);

//HTTP Methods "verbs"
//GET, POST, PUT, DELETE (others like PATCH)
//CRUD
//GET - READ
//POST - CREATE
//PUT - UPDATE
//DELETE - DELETE

const app = express();

//setup view engine with hbs
app.set("view engine", "hbs");

//static files are css, js, html, images, movies, etc 
app.use(express.static("public"));
//localhost:3000/<static files>


//ROUTING
app.get("/", function (request, response) {
  //test your route first
  console.log("All is well"); //show in nodejs console
  //response.send("Hey, all is well");
  
  //response.render(<hbs file>, {<object>})
  response.render("index", {
    "country": "QatarX",
    "student": [1,2,3]
  });
});

//paramterized route
//provide a more dynamic page with hello.hbs
app.get("/hello/:firstName", function (request, response) {
  //require the request parameters
  let firstName = request.params.firstName;

  //response.send("Hi " + firstName);
  response.render("hello",{
    "firstX": firstName
  })
});

//only when a POST request is sent over
app.post("/", function (request, response) {});

//attach listener to express
//express won't quit unless forced to or giant error
app.listen(3000, function () {
  console.log("Server is running");
});
