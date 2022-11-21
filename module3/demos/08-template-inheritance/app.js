//require modules
const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

//create express app
const app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

//setup waxOn
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

//ROUTING
app.get("/", function (request, response) {});

app.get("/hello", function (request, response) {
  response.render("hello",{
    "students": []// ["vito","dewi","kai"]
  });
});

//contact-us route to show template inheritance
app.get("/contact-us", function (request, response) {
    response.render("contact-us");
  });

app.listen(3000, function () {
  console.log("server started");
});
