{ 
  "name": "nodejs", 
  "version": "1.0.0", 
  "description": "", 
  "main": "index.js", 
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1" 
  }, 
  "keywords": [], 
  "author": "", 
  "license": "ISC" 
} 

const http = require("http"); 
//create a server object: 
http 
  .createServer(function (req, res) { 
    res.write("<h1>Hello World!</h1>");  
    //write a response to the client 
     
    res.end();  
    //end the response 
  }) 
  .listen(8080);  
//Server runs on localhost:8080 
