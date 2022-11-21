const express = require('express');
const hbs = require('hbs');
const waxOn = require('wax-on');


let app = express(); //create the express application
app.set('view engine', 'hbs'); // inform express that we are using hbs as the view engine
waxOn.on(hbs.handlebars); // enable wax-on for handlebars (for template inheritance)
waxOn.setLayoutPath('./views/layouts') // inform wax-on where to find the layouts

app.use(express.urlencoded({
    'extended':false // for processing HTML forms usually it's false because
                     // HTML forms are usually quite simple
}))

// routes
app.get('/', function(req,res){
    //res.send("hello world")
    res.render("simple-form");
})

app.post('/', function(req,res){
    console.log(req.body);

    let foodName = req.body.foodName || "";
    let description = req.body.description || "";
    let cruisine = req.body.cruisine || "western";

    //checkbox if 1 item - string
    //checkbox if multiple - array
    //checkbox if 0 item - nothing!
    let tags = [];

    //if 1 item or multiple item
    if(req.body.tags){
        //multiple item
        if(Array.isArray(req.body.tags)){
            tags = req.body.tags;
        }else{
            //single item
            //in this instance req.body.tags is a string
            //we dump it into the array itself
            tags = [req.body.tags];
        }
    }
    console.log(`tags = ${tags}`);
    if(req.body.tags){
        res.render('success');
    }else{
        res.render('simple-form',{
            "error": true,
            "errorMsg": "Error in tag. U must select a tag"
        });
    }
    //res.send("Received!");
})


app.listen(3000, function(){
    console.log("server started");
})