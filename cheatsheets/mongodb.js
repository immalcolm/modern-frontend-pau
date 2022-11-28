/* COMMAND LINE */
mongod &    // start mongo server on port 27017 by default
mongo mydb  // launch mongo shell using the specified database

// importing & exporting
mongoimport -d mydb -c mycollection --jsonArray --file input.json
mongoimport -d mydb -c mycollection --headerline --type csv --file input.csv
mongoexport -d mydb -c mycollection --out output.json

/* MONGO SHELL */

// info
use mydb
show collections

// dropping
db.dropDatabase();
db.scores.drop();

// count
db.scores.count();
db.getLastErrorObj(); // helpful function to get the # of rows affected by the last update

// searching
db.scores.findOne();
db.scores.find();
db.scores.find().limit(3).sort('name');
db.inventory.find( { 'producer.company': 'ABC123' } );
db.inventory.find( { type: 'food' }, { item: 1, qty: 1, _id:0 } );
db.inventory.find( { type: { $exists: 0 }});
db.categories.ensureIndex( { parent: 1 } );

// saving & updating
db.scores.save({a: 90});
db.scores.insert({a:75});
db.scores.update({a: 90}, {a: 95});
db.scores.update({a: 95}, {$set: {revisions: [88,90]}});
db.scores.update({a: 95}, {$push: {revisions: [95]}});
db.scores.update({a: 95}, {$unset: { revisions: ''}});

// deleting
db.scores.remove({a: 95});
db.scores.remove();

db.books.findAndModify ( {
  query: {
    _id: 123456789,
    available: { $gt: 0 }
  },
  update: {
    $inc: { available: -1 },
    $push: { checkout: { by: "abc", date: new Date() } }
  }
})

// update-in-place, e.g. converting text to a proper date
var cursor = db.clients.find()
while (cursor.hasNext()) {
  var doc = cursor.next();
  db.clients.update({_id : doc._id}, {$set : {date: new Date(doc.date)}})
}

// count the unique values of a field
db.collection.group({
  key: { "name": true},
  reduce: function(obj,prev) { prev.count += 1; },
  initial: { count: 0 }
});