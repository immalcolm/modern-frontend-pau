const express = require("express");
const cors = require("cors");

//setup config 
require("dotenv").config();//process our .env file 

// ./ means relative path
const MongoUtil = require("./MongoUtil");// path to MongoUtil.js 
const { ObjectId } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI;

const app = express();

//ENABLE JSON PROCESSING
//result API communicates via the JSON format
//when we send data to the restful API, we use JSON
//reply via JSON
//previously using.... app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Enable cross origin resource sharing (CORS)
app.use(cors());

async function main(){
    await MongoUtil.connect(MONGO_URI, "foodpanda_pau");
    console.log("server connected");
    app.get("/", function (req, res){
        res.send("Hello World");
    }); 

    //allow clients to put in new food sightings 
    //client to provide the following
    // - description: string
    // - food: array of strings 
    // - datetime: date time
    app.post("/food-sightings", async function(req, res) {
        let description  = req.body.description;
        let food = req.body.food;

        //setup date time
        //if req.body.datetime info is in the valid date time format
        //then assign the value to the variable datetime
        //else we will assign using new Date()
        let datetime = new Date(req.body.datetime) || new Date();

        //setup literal obj (temp)
        let foodSighting = {
            description: description,
            food: food, //""
            datetime: datetime //""
        }

        //insert into database
        const db = MongoUtil.getDB();

        //add one document to the collection
        const result = await db.collection("sightings").insertOne(foodSighting);

        //reply with OK and the JSON status
        res.status(200);
        res.send(result);
    });

    //perform simple search
    app.get("/food-sightings", async function(req, res){
        //start with an empty criteria, get all docs 
        let criteria = {};
        const db = MongoUtil.getDB();

        //query strings are retrieved via req.query
        console.log(req.query);

        //if user specifies query content then we add them in 
        //basic search 
        if(req.query.description){
            //adding the `description` key to criteria obj and assign req.query.description

            criteria.description = req.query.description;

            criteria.description = {
                $regex: req.query.description, //use regex search
                $options: "i" //ignore case (upper/lower case)
            }
        }

        if(req.query.food){
            //searching by food (array)
            criteria.food = {
                $in: [req.query.food],
            }
        }

        const result = await db.collection("sightings").find(criteria).toArray();

        res.status(200);
        res.send(result);

    })


    //this route is to update a food sighting by its id
    app.put("/food-sightings/:sighting_id", async function(req, res){
        try{
            let {description, food} = req.body;
            let datetime = new Date(req.body.datetime) || new Date();

            let modifiedDocument = {
                description,
                food,
                datetime,
            }

            const result = await MongoUtil.getDB()
                .collection("sightings")
                .updateOne({
                    _id: ObjectId(req.params.sighting_id)
                },{
                    $set: modifiedDocument
                })

            res.status(200);
            res.json({
                "message": "Update is successful"
            })

        }catch(error){
            res.status(500);
            res.send(error);
            console.log(error);
        }
    });

    //delete API
    app.delete("/food-sightings/:sighting_id", async function(req, res){
        try{
            await MongoUtil.getDB()
            .collection("sightings")
            .deleteOne({
                _id: ObjectId(req.params.sighting_id)
            })
            res.status(200);
            res.send({"msg": "Data deleted successfully"});
        }catch(error){
            res.status(500);
        }
    })

}

main();

app.listen(3000, function(){
    console.log(`Server is listening at port: 3000`);
})

