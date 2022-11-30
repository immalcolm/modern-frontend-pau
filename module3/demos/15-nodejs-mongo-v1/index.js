//setup connection string
//require mongo client
//which allows use to connect node app to a mongo db

const { MONGO_CLIENT_EVENTS, MongoClient } = require("mongodb");

//mongodb is a huge asset, we will only use the mongoclient
//mongoclient allows us to issue commands to the mongodb
const mongoclient = require("mongodb").MongoClient;

//setup ENV 
//dotenv package will look for .env file in same directory and process
//`process` represents the OS , and .env the environment
//environment contains several variables
//remember to add .gitignore .env file 
require('dotenv').config();
console.log(process.env);

//create a client
//place connection string from .env file 
//this is an async process
async function main(){

    //allow to connect to mongodb
    let url = process.env.MONGO_URI;

    //setup our client connection
    let client = await MongoClient.connect(url, {
        useUnifiedTopology: true
    });

    //select which database we want connect
    let dbAirBnb = "sample_airbnb";
    let db = client.db(dbAirBnb);

    //test collection call 
    //convert data to an array
    let listings = await db.collection("listingsAndReviews").find().limit(20).toArray();

    console.log(listings);

}

main();