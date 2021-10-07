var express = require('express');
var app = express();
require('dotenv').config()

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
app.get('/',function(req,res){
  res.sendFile(__dirname+"/views/index.html");
});

/** 3) Serve an HTML file */


/** 4) Serve static assets  */
app.use(express.static(__dirname+"/public"));
app.use("/public", express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route *//*
app.get("/json",function(req,res){
  res.json({"message": "Hello json"});
});
*/
/** 6) Use the .env file to configure the app */
/*app.get("/json",function(req,res){
  var message="Hello json";
  if(process.env.MESSAGE_STYLE=="uppercase") 
    message=message.toUpperCase();
  return res.json({"message": message});
});*/
app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json(
            {"message": "HELLO JSON"}
        )
    } else {
        res.json(
            {"message": "Hello json"}
        )
    }
});
//alert(process.env.MESSAGE_STYLE);
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;