//work with file system
//using Node Global fs 
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

