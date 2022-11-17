//init http module
const http = require("http");

const server = http.createServer((req, res) => {
  //get the request url to go to
  let url = req.url;
  let method = req.method;
  
  //if it's a root route
  if (url === "/") {
    console.log(`User req url ${url}`);

    console.log(`User coming in...`);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body><h1>hi there</h1></body>");
    res.write("</html>");
    return res.end();
  }else if (url === "/about") {
    console.log(`User req url ${url}`);

    console.log(`User coming in...`);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body><h1>About Us</h1></body>");
    res.write("</html>");
    return res.end();
  }else if(url === "/contact"){
    //is someone sending a form data over
    //process accordingly
    res.statusCode = 302;
    res.setHeader("Location","/"); //redirect to base/root url
    return res.end();
  }
});

//listen
server.listen(3000);
