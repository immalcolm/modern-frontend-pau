const express = require("express");
const cors = require("cors");

//setup config 
require("dotenv").config();//process our .env file 

// ./ means relative path
const MongoUtil = require("./MongoUtil");// path to MongoUtil.js 

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
            food: food,
            datetime: datetime
        }

        //insert into database
        const db = MongoUtil.getDB();

        //add one document to the collection
        const result = await db.collection("sightings").insertOne(foodSighting);

        //reply with OK and the JSON status
        res.status(200);
        res.send(result);
    });

}

main();

app.listen(3000, function(){
    console.log(`Server is listening at port: 3000`);
})

