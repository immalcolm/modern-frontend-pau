//require items
const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const PORT_NUM = 3000;

//create express app
const app = express();

//setup app engine with hbs
app.set("view engine", "hbs");

//setup waxOn
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

//SETUP helpers
//hbs.registerHelper("<helper name>", function(<args>, options>){}
//simple helper to compare 2 arguments
hbs.registerHelper("ifEquals", function (arg1, arg2, options) {
  if (arg1 == arg2) {
    //do something
    return options.fn(this);
  } else {
    //do somethign else
    return options.inverse(this);
  }
});

//simple helper to cycle through a list
hbs.registerHelper("list", function (arg1, options) {
  //long string that will be returned
  if (arg1.length > 0) {
    let output = "<ul>";

    for (let i = 0; i < arg1.length; i++) {
      output += "<li>" + options.fn(arg1[i]) + "</li>";
    }
    return output + "</ul>";
  } else {
    //when it is empty
    return options.inverse(this);
  }
});

//ROUTING
app.get("/", function (request, response) {
  //response.send("Hi there");
  console.log("/ route is working");

  response.render("simple-helper");
});

app.get("/students", (request, response) => {
  /*
    response.render("simple-list-helper",{
        "students": ["Kai", "Dewi", "Vito", "Bryan"]
    });
    */
  response.render("simple-list-helper", {
    students: [
      { firstName: "Ah Seng", lastName: "Tan" },
      { firstName: "Kim Lim", lastName: "Tan" },
      { firstName: "Joseph", lastName: "Tan" },
    ],
  });
});

app.get("/students-array", (request, response) => {
    /*
      response.render("simple-list-helper",{
          "students": ["Kai", "Dewi", "Vito", "Bryan"]
      });
      */
    response.render("simple-array-with-index", {
        "students": ["Kai", "Dewi", "Vito", "Bryan"],
    });
  });

app.listen(PORT_NUM, function () {
  console.log("Server is running");
});
