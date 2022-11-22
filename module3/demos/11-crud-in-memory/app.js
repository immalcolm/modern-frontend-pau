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
        tags: ["organic","cheap"],
    },
]

//CRUD
//Create, Read, Update, Delete

//R: read - to retrieve and display data from somewhere 
//(db, localstorage, in-memory, etc)
//use a url that matches the purpose? 
//SEO - search engine optimisation reasons + syntax friendly
app.get("/all-food", function(req, res){
    let allFood = foodRecords;
    res.render("all-food", {
        allFood: allFood
    })
});


//C: create
//2 routes 
//1- to display form
//1 - handle all form processing
app.get("/add-food", function(req, res){
    res.render("add-food");
});

//C: create to create form content
app.post("/add-food", function(req,res){
    //res.send("received");
    let foodName = req.body.foodName;
    let calories = req.body.calories;
    let meal = req.body.meal || "western";
    
    let selectedTags = [];
    if(req.body.tags){
        if(Array.isArray(req.body.tags)){
            selectedTags = req.body.tags;
        }else{
            //if only 1 selected

            //selectedTags = [req.body.tags];
            selectedTags.push(req.body.tags);
        }
    }

    let newFoodRecord = {
        "id": Math.floor(Math.random() * 10000 +1),
        "foodName": foodName,
        "calories": calories,
        "meal": meal,
        "tags": selectedTags
    }

    foodRecords.push(newFoodRecord);

    console.log(`New item is : ${newFoodRecord.id}`);
    //redirect user to page
    res.redirect("/all-food");

})

//ROUTING
app.get("/", function(req, res){
    res.send("hey there");
})

//attach listener
app.listen(PORT, function(){
    console.log(`server is running @${PORT}`);
})

