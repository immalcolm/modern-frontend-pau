//work with file system
//using Node Global fs 

//relative pathing './<path>'
//absolute pathing '/<path>'
//if you never include the slash, we will assume it's a global module
const fs = require('fs');

//write sample text to panda.txt
//fs.writeFileSync(<file|path>, <string>);
//fs.writeFileSync('panda.txt','Lunch is Over');

fs.readFile('./panda.json', (err, data)=>{
    console.log(data);
});

fs.readFile('./panda.json', 'utf-8', (err, data)=>{
    console.log(data);
});
console.log('test');

