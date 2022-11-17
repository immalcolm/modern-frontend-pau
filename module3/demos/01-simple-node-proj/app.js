//start of running our simple node 
console.log("running node ");

//lets start using our exports
//we will need a require first 
let myPanda = require('./my-module');
console.log(myPanda.myHeading);

let _ = require('lodash');
console.log(_.random(1,100));