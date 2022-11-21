const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const PORT = 3000;

const app = express();

//setup view engine
app.set("view engine", "hbs");

//setup waxon
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

//ifEquals helper to check favorite fruit
hbs.registerHelper("ifEquals", function (arg1, arg2, options) {
  //tenary ? true : false
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

//helper to check contains 'apple'
//keyword: apple

//init with a opening ul tag
//check whether word has apple
//if have apple
//create a list item
//finish loop then close off with a closing ul tag
hbs.registerHelper("checkForApple", function (arg, options) {
  let output = "<ul>";
  let items = arg
    .filter((item) => item.includes("apple"))
    .map((item) => `<li>${item}</li>`)
    .reduce((prev, next)=>prev + next);

  console.log(items);
  //do some processing with arguments
  //manipulate argument's ith index value and check
  //for loop
  /*
  for (let i = 0; i < arg.length; i++) {
    if (arg[i].includes("apple")) {
      console.log(`${arg[i]} @ ${i}`);
      output += `<li>${arg[i]}</li>`;
    }
  }*/

  return output + items + "</ul>";
});
//ROUTING
app.get("/", function (req, res) {
  console.log("all is well");
  //res.send("all is well....");

  res.render("apples", {
    favouriteFruit: "apples",
    fruits: ["applepie", "kingapple", "banan", "pear"],
  });
});

app.listen(PORT, function () {
  console.log(`Server is listening at port ${PORT}`);
});
