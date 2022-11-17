const http = require('http');


function reqServer(){

}

//use arrow function 
const server = http.createServer((request, response) => {
    //console.log(request);
    //retrieve the url request that's coming in
    //retrieve the method
    console.log(request.url, request.method);

    //exit out the event loop
    process.exit();
})

server.listen(3000);

