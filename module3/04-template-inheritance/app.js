const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');
const PORT = 3000;

let app = express(); //create the express application
app.set('view engine', 'hbs'); // inform express that we are using hbs as the view engine

app.use(express.static("public"));//static folder reference

waxOn.on(hbs.handlebars); // enable wax-on for handlebars (for template inheritance)
waxOn.setLayoutPath('./views/layouts') // inform wax-on where to find the layouts

app.use(express.urlencoded({
    'extended':false // for processing HTML forms usually it's false because
                     // HTML forms are usually quite simple
}))

//collection of records
let foodItems = [
    {"id":100, "foodName": "Chicken Rice", "foodCalories": 100},
    {"id":101, "foodName": "Fried Rice", "foodCalories": 400},
]

// routes
app.get('/', function(req,res){
    //res.send("hello world");
    res.render("home");
})

app.get('/add-item', function(req,res){
    res.render("add-item");
});

app.get('/manage-item', function(req,res){
    res.render("manage-item",{
        "allFood": foodItems
    });
});

//create a update route
/*
let foodItems = [
    {"id":100, "foodName": "Chicken Rice", "foodCalories": 100},
    {"id":101, "foodName": "Fried Rice", "foodCalories": 400},
]*/
//update-item/1001
//update-item/<id>

app.get('/update-item/:id', function(req,res){
    //params is the url parameter
    let id = req.params.id;

    //step 1: setup a null object as our base
    let foodRecord = null;

    //step 2
    //perform a linear search and find the item that matches the item
    for(let record of foodItems){
        //check whether record matches the one we are finding for
        if(id == record.id){
            //match found
            foodRecord = record; //assume all ids are unique
            break;
        }
    }

    res.render("update-item", {
        "foodRecord": foodRecord
    });
})


app.listen(PORT, function(){
    console.log("server started");
})