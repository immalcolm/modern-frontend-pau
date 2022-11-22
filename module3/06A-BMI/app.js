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


//ROUTING
//============
//usually when we have forms, we setup 2 routes
//1 route to display - GET
//1 route to handle the form - POST
app.get("/bmi", function(req, res){
    //res.send("working bmi");
    
    //render /view/bmi.hbs
    res.render("bmi");
});

//setup post route
app.post("/bmi", function(req, res){
    //get form values using req.body and NOT req.params
    //req.params is for URL parameters
    let height = Number(req.body.height) || 0;
    let weight = Number(req.body.weight) || 0 ;

    let bmi = 0;
    if(height && weight)
        bmi = weight/height**2;

    //res.send("form submitted");
    res.render("bmi-result",{
        bmi: bmi
    })
})

app.listen(PORT, function(){
    console.log("server started");
})