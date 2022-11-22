//setup our requires
const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
waxOn.on(hbs.handlebars);

const PORT = 3000;
const app = express();

//setup our handlebars
app.set("view engine", "hbs");
app.use(express.static("public"));

//setup our wax-on to use handlebars for template inheritance
waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

//this allows us to handle forms
app.use(express.urlencoded({extended: false}));

//DATA!!
//inmemory data 
//-----------------
let foodRecords = [
    {
        id: 1000,
        foodName: "Chicken Rice",
        calories: 400,
        meal: "lunch",
        tags: ["healthy"],
    },
    {
        id: 1001,
        foodName: "Hawaiian Pizza",
        calories: 500,
        meal: "dinner",
        tags: ["organic","western"],
    },
]

//CRUD
//Create, Read, Update, Delete

//R: read - to retrieve and display data from somewhere (db, localstorage, in-memory, etc)
//use a url that matches the purpose? 
//SEO - search engine optimisation reasons + syntax friendly
app.get("/all-food", function(req, res){
    let allFood = foodRecords;
    res.render("all-food", {
        allFood: allFood
    })
});

//ROUTING
app.get("/", function(req, res){
    res.send("hey there");
})

//attach listener
app.listen(PORT, function(){
    console.log(`server is running @${PORT}`);
})

