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

// routes
app.get('/', function(req,res){
    res.send("hello world")
});

//FRUITS
//
app.get('/fruits', function(req, res){
    //res.send("enter fruits");
    res.render("fruits");
});

/*
| Fruit | Cost |
| :---  | :--- |
|Apple	|3|
|Durian	|15|
|Orange	|6|
|Banana	|4|

*/

app.post('/fruits', function(req, res){
    //res.send("Fruit Cal");
    console.log(`Fruit Items: ${req.body.items}`);
    let fruits = [];
    //are there any form data titled "items" being sent over
    if(req.body.items){
        //if it's an array meaning more than 1 item being checked
        if(Array.isArray(req.body.items)){
            fruits = req.body.items;
        }else{
            //if it's only 1 item selected, make it an array
            fruits = [ req.body.items ];
        }
    }
    //set a base cost 
    let cost = 0;
    
    //Method 1: handle calculation using if.. else
    /*
    if(fruits.includes("durian")){
        //add amount
        cost += 15;
    }
    if(fruits.includes("apple")){
        cost += 3;
    }
    if(fruits.includes("orange")){
        cost += 6;
    }
    if(fruits.includes("banana")){
        cost += 4;
    }
    */

    //Method 2: use a dictionary
    //setup a simple priceChart object
    let priceChart = {
        durian: 15,
        apple: 3,
        orange: 6,
        banana: 4
    }
    //cycle through the objects
    //fruits refer to the array of items that the user select
    //f - is a item string (some fruit)
    for(let f of fruits){
        cost += priceChart[f];
    }

    //Method 3: using reduce
    cost = fruits.reduce(function(previous, current){
        return previous + priceChart[current];
    },0)

    res.send(`fruits cost: $${cost}` );

});

app.listen(PORT, function(){
    console.log("server started");
})