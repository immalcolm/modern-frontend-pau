//setup our requires
const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");

require("handlebars-helpers")({
  handlebars: hbs,
});

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
app.use(express.urlencoded({ extended: false }));

//DATA!!
//inmemory data
//-----------------
let foodRecords = [
  {
    id: 1000,
    foodName: "Chicken Rice",
    calories: 400,
    meal: "western",
    tags: ["healthy"],
  },
  {
    id: 1001,
    foodName: "Hawaiian Pizza",
    calories: 500,
    meal: "japanese",
    tags: ["organic", "cheap"],
  },
];

//CRUD
//Create, Read, Update, Delete

//R: read - to retrieve and display data from somewhere
//(db, localstorage, in-memory, etc)
//use a url that matches the purpose?
//SEO - search engine optimisation reasons + syntax friendly
app.get("/all-food", function (req, res) {
  let allFood = foodRecords;
  res.render("all-food", {
    allFood: allFood,
  });
});

//C: create
//2 routes
//1- to display form
//1 - handle all form processing
app.get("/add-food", function (req, res) {
  res.render("add-food");
});

//C: create to create form content
app.post("/add-food", function (req, res) {
  //res.send("received");
  let foodName = req.body.foodName;
  let calories = req.body.calories;
  let meal = req.body.meal || "western";

  //by default empty array
  let selectedTags = [];
  if (req.body.tags) {
    if (Array.isArray(req.body.tags)) {
      selectedTags = req.body.tags;
    } else {
      //if only 1 selected

      //selectedTags = [req.body.tags];
      selectedTags.push(req.body.tags);
    }
  }

  let newFoodRecord = {
    id: Math.floor(Math.random() * 10000 + 1),
    foodName: foodName,
    calories: calories,
    meal: meal,
    tags: selectedTags,
  };
  //create a temp object using our function based template
  let tempRecord = new FoodRecord(
    Math.floor(Math.random() * 10000 + 1),
    foodName,
    calories,
    meal,
    selectedTags
  );

  //insert into the list of records
  //foodRecords.push(tempRecord);
  foodRecords.push(newFoodRecord);

  console.log(`New item is : ${newFoodRecord.id}`);
  //redirect user to page
  res.redirect("/all-food");
});

//function based object
function FoodRecord(id, foodName, calories, meal, tags) {
  this.id = id;
  this.foodName = foodName;
  this.calories = calories;
  this.meal = meal;
  this.tags = tags;
}

//U: Update - we want to update particular record based on an id
//update-food/1001
//update-food/:<id>
app.get("/update-food/:food_record_id", function (req, res) {
  //retrieve based on unique id
  //get the parameter from the user (food_record_id)

  //how to get the record?
  //tap on req.params.<parameter value>
  let id = req.params.food_record_id;
  console.log(`id: ${id}`);
  //how to make our UI to include the id?

  let tempRecord = null;
  //perform simple linear to find record
  for (let record of foodRecords) {
    //we check if the current record that we are looking at matches
    //if it matches then we pass the data to the hbs view
    if (record.id == id) {
      tempRecord = record;
      console.log(`Food found: ${tempRecord.id}`);
      break; //exit out of loop once found
    }
  }

  //food record to send to the view

  res.render("update-food", {
    foodRecord: tempRecord,
  });
});

//U: Update form values 
//update-food/1001 -> but in POST . meaning form submission
//req.params -> url related
//req.body -> form data related
app.post("/update-food/:food_record_id", function(req, res){
    let selectedTags = [];

    if(Array.isArray(req.body.tags)){
        selectedTags = req.body.tags;
    }else{
        selectedTags.push(req.body.tags);
    }

    //temp object to be re-inserted
    let tempRecord = {
        "id": req.params.food_record_id,
        "foodName": req.body.foodName,
        "calories": req.body.calories,
        "meal": req.body.meal,
        "tags": selectedTags
    }

    let index = -1;
    //cycle through the records, update it 
    for (let i =0 ; i< foodRecords.length; i++){
        //check if the id matches with my update form submission
        if(foodRecords[i].id == req.params.food_record_id){
            index = i;

            //once found exit loop
            break;
        }
    }
    //assign the newly updated record to -> current food records 
    foodRecords[index] = tempRecord;

    //redirect user to the all-food view
    res.redirect('/all-food');
})

//ROUTING
app.get("/", function (req, res) {
  res.send("hey there");
});

//attach listener
app.listen(PORT, function () {
  console.log(`server is running @${PORT}`);
});
