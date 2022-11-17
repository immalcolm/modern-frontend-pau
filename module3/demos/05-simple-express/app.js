//Thought process
//get the express module? is it installed?
//setup the express app


//we setup our express server
//require exist only in nodejs
//when we require express, we are importing express object
//nodejs looks for index.js inside the express module
//variable express will store the entire express object
const express = require("express");

//create an express application
const app = express();

//add routes
//create simple route to the root 
//a route is basically a path to the server
//we want to match a desired route(request) to what the server has to route

app.get('/', function (req, res){
    console.log("entering root");
    res.send("Hello Panda");
});

app.get('/about-us', function(req, res){
    res.send("about panda");
});

//setup a parameterized format route
//localhost:3000?hello=bryan
//localhost:3000?hello=kai
app.get('/hello/:id',function(req, res){
    let name = req.params.id;

    res.send("Hi! " + name);
});



//our listener must be placed last 
//create a event listener
//.listen(<port number>, <callback>)
app.listen(3000, function(){
    console.log("Server started");
})