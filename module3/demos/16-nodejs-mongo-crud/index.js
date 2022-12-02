const e = require("express");
const express = require("express");
const hbs = require("hbs");
const { ObjectId } = require("mongodb");
const wax = require("wax-on");
const PORT = 3000;

const MongoUtil = require("./MongoUtil");

require("dotenv").config();

const app = express();

app.set("view engine", "hbs");
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

//get view helpers 189 helpers
require("handlebars-helpers")({
  handlebars: hbs,
});

app.use(express.urlencoded({ extended: false }));

async function main() {
  //connect to database first before routing
  const url = process.env.MONGO_URI;
  const dbName = "foodpanda_pau";

  await MongoUtil.connect(url, dbName);
  console.log("Connected to the database");

  //ROUTING
  app.get("/", function (req, res) {
    res.send("Hi there");
  });

  //Create routes and connect with DB

  //DISPLAY FOOD - GET
  app.get("/display-food", async function (req, res) {
    let db = MongoUtil.getDB(); //get database "foodpanda_pau"

    let foodRecords = await db.collection("food_records").find({}).toArray();
   // console.log(foodRecords);
    res.render("display-food", {
      foodRecords: foodRecords,
    });
  });

  //ADD FOOD - GET
  app.get("/add-food", function (req, res) {
    res.render("add-food");
  });

  app.post("/add-food", function (req, res) {
    //data from form inside `req.body`
    //let foodRecordName = req.body.foodRecordName;
    //let calories = req.body.calories;
    //let tags = req.body.tags;

    //Javascript destructing process
    let { foodRecordName, calories, tags } = req.body;

    //check tags whether array, 1 element or exist
    if (!tags) {
      tags = [];
    } else {
      if (!Array.isArray(tags)) {
        tags = [tags]; //force into a tag with 1 element
      }
    }
    console.log(`Food record: ${foodRecordName} : ${calories} : ${tags}`);

    //connect to db n insert
    let db = MongoUtil.getDB();

    /*
        let newRecord = {
            foodRecordName: foodRecordName,
            calories: calories,
            tags: tags 
         }*/

    db.collection("food_records").insertOne({
      foodRecordName: foodRecordName,
      calories: calories,
      tags: tags,
    });
    res.redirect("/display-food");
  });

  //we use food_id parameter to indicate the objectid
  //of the food record doc that we want to update
  // /update-food/1001
  app.get("/update-food/:food_id", async function (req, res) {
    //check whether param id is correct
    console.log(`food_id: ${req.params.food_id}`);

    let db = MongoUtil.getDB();

    //rememeber to use ObjectId function to find
    //mongodb query using findOne
    //findOne and other mongo queries are asynchronous
    let foodRecord = await db.collection("food_records").findOne({
      _id: ObjectId(req.params.food_id),
    });
    console.log(foodRecord);

    res.render("update-food", {
      foodRecord: foodRecord,
    });
  });

  //Update food record
  app.post("/update-food/:food_id", async function (req, res) {
    let { foodRecordName, calories, tags } = req.body;
    if (!tags) {
      tags = [];
    } else {
      if (!Array.isArray(tags)) {
        tags = [tags];
      }
    }

    let db = MongoUtil.getDB();
    //set records based on destructured content
    db.collection("food_records").updateOne({
      _id: ObjectId(req.params.food_id),
    },{
        $set: {
            foodRecordName: foodRecordName,
            calories: calories,
            tags: tags
        }
    });

    res.redirect("/display-food");
  });//end of update-food/:food_id (POST)


  //delete food item (GET)
  app.get("/delete-food/:food_id", async function(req, res){
    let db = MongoUtil.getDB();

    let foodRecord = await db.collection("food_records").findOne({
        _id: ObjectId(req.params.food_id)
    })

    //console.log(foodRecord);

    res.render("delete-food", {
        foodRecord: foodRecord
    })
  });

  //DELETE FOOD - POST
  app.post("/delete-food/:food_id", async function(req, res){
    let db = MongoUtil.getDB();
    console.log(`food_id: ${req.params.food_id}`);
    await db.collection("food_records").deleteOne({
        _id: ObjectId(req.params.food_id)
    })

    res.redirect("/display-food");
  });


  //Subdocuments in mongodb
  //---------------------
  //create for sub-document (GET)
  app.get("/food/:food_id/add-note", async function(req, res){
    let db = MongoUtil.getDB();

    //if using .find()--> need to convert data toArray()
    let foodRecord = await db.collection("food_records").findOne({
      _id: ObjectId(req.params.food_id)
    });

    res.render("add-note", {
      foodRecord: foodRecord
    });

  });

  //Create for sub-document (POST)
  //1.test form works
  //2. submit form
  //3. check db whether new data is updated
  //4. check display on view 
  app.post("/food/:food_id/add-note", async function(req, res){
    let db = MongoUtil.getDB();

    //temp note object
    //ObjectId() -> tell mongodb to generate a unique key
    let newNote = {
      _id: ObjectId(),
      content: req.body.content
    }
    //console.log(req.body.content)

    db.collection("food_records").updateOne({
      _id: ObjectId(req.params.food_id)
    },
    //a push . even if an array doesn't exist, it will be created
    {
      $push: {
        notes: newNote
      }
    }
    )

    res.redirect(`/food/${req.params.food_id}`);

  });

  //view food details along with notes
  app.get("/food/:food_id", async function(req, res){
    let db = MongoUtil.getDB();

    //remember to use ObjectId function
    //use findone it returns only 1 result
    //findOne is an async call
    let foodRecord = await db.collection("food_records").findOne({
      _id: ObjectId(req.params.food_id)
    })

    res.render("food-details", {
      foodRecord: foodRecord
    })
  });

  //update sub doc - update (GET)
  app.get("/food/:food_id/update-note/:note_id", async function(req,res){
    //mongodb
    let db = MongoUtil.getDB();

    let noteId = req.params.note_id;

    //id matches the note id
    //project only what we want to display
    //make sure you key in the correct collection name 
    let foodRecord = await db.collection("food_records").findOne({
      _id: ObjectId(req.params.food_id)
    },{
      projection: {
        foodRecordName: 1,
        notes: {
          $elemMatch: {
            _id:  ObjectId(noteId)
          }
        }
      }
    })
    
    res.render("update-note",{
      foodRecord: foodRecord
    })

  });//end update note (GET)


  //update sub-doc update doc(POST)
  //if using as RESTFUL API use (PUT)
  app.post("/food/:food_id/update-note/:note_id", async function (req, res){
    let db = MongoUtil.getDB();

    //
    let noteId = req.params.note_id;

    //when updating we use $set to update at that particular field
    //sub.doc finding we use notes._id -> take note the dot notation
    await db.collection("food_records").updateOne({
      _id: ObjectId(req.params.food_id),
      "notes._id": ObjectId(noteId),
    },{
      $set: {
        "notes.$.content": req.body.content
      }
    })
    res.redirect(`/food/${req.params.food_id}`);
  });

  //Delete sub document - delete
  //using the link directly -> click -> delete
  app.get("/food/:food_id/delete-note/:note_id", async function(req, res){
    let db = MongoUtil.getDB();
    let noteId = req.params.note_id;

    //we use update using $pull instead of removing the sub doc
    await db.collection("food_records").updateOne({
      _id: ObjectId(req.params.food_id)
    },{
      $pull: {
          "notes":{
            "_id": ObjectId(noteId)
          }
      }
    })

    res.redirect(`/food/${req.params.food_id}`);
  })

}

main();

app.listen(PORT, function () {
  console.log(`Server is running at PORT ${PORT}`);
});
