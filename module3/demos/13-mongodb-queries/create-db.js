//creating a database 
//simply by using the `use` command
//if the db doesn't exist, mongodb will create one
//if db exist, it will swap to the the one specified
use animal_shelter;

//creating a collection 
//simple way is adding a record based on the collection name
db.animals.insertOne({
    "name": "Milo",
    "age": 4,
    "breed": "Mini Poodle",
    "type": "dog"
})

//insert many documents
db.animals.insertMany([
    {
        "name": "Lucky",
        "age": 2,
        "breed": "Golden Retriever",
        "type": "dog"
    },
    {
        "name": "Patchy",
        "age": 1,
        "breed": "Border Collie",
        "type": "dog"
    }
])

//update an existing document in db
//1. specify the object to find
//2. specify the fields i wan to change
//first parameter will be criteria to match 
//all documents that match the criteria will be updated
//SQL
//UPDATE animals WHERE id = "6386b3b54c7afa4f908b4646" SET name = "lighting"
db.animals.updateOne({
    "_id": ObjectId('6386b3b54c7afa4f908b4646')
},{
    "$set": {
        "name": "Lighting"
    }
})

db.animals.deleteOne({
    "_id": ObjectId('6386b3b54c7afa4f908b4647')
})

//push an item to an array in a document
//use $push to add to an array in the document 
//add a new object `checkups` and unique objectid 
db.animals.updateOne({
    "_id": ObjectId("6386b4204c7afa4f908b4648")
},{
    "$push": {
        "checkups":{
            "_id": ObjectId(),
            "name": "Dr Vito",
            "diagnosis": "Skin Lumps",
            "treatment": "Oilment Lotion"
        }
    }
})

//push to array 
db.animals.updateOne({
    "_id": ObjectId("6386b4204c7afa4f908b4648")
},{
    "$push": {
        "checkups":{
            "_id": ObjectId(),
            "name": "Dr Wei Jie",
            "diagnosis": "Eye Sore",
            "treatment": "Oilment Lotion"
        }
    }
})