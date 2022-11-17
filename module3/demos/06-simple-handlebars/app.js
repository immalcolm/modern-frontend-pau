//ensure npm init is done to setup project
//ensure express, hbs, nodemon is installed

//1. require express
const express = require('express');

//5. require handlebars hbs
const hbs = require('hbs');

//2. setup express app
const app = express();

//https://expressjs.com/en/guide/using-template-engines.html
//6. setup our template engine. put it after our express app is created
app.set('view engine', 'hbs');

//7. physical change in folders
//create a folder views 
//inside views create index.hbs || <yourfilename>.hbs

//10. create a public folder (to serve up static files)
//what are static files?
//css, js, image files, videos etc.. 
//https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

//3. start with simple routing to test express is ok 
app.get('/', function(req, res){
    
    //res.send("hello world");

    //8. change to use a hbs view
    //call the render function of express to tap on handlebars (index.hbs)
    res.render('index.hbs');
});

//9. new route with parameters
app.get('/hello/:firstName', function(req, res){
    //do something
    let fname = req.params.firstName;
    console.log(fname);
    res.render('hello', {
        firstName: fname
    })
})

//4. start server and listen. register listener
app.listen(3000, function(){

})