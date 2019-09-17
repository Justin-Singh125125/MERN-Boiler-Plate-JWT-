const express = require("express");
const cookieParser= require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for jwt authentication
app.use(cookieParser());

//decode the jwt token
app.use((req,res,next)=>{
    //destructure the token
    const {token} = req.cookies;

    //if the token exists
    if(token){

      //get the verified userID from jwt
      const { _id }  = jwt.verify(token, "VwyWnsak8mgS1zLpw2W3pUN1isVSQ5jeVW13ugYUJI3QFOQh7c4If4yYKQGJWdWY");

      //set that  userId on the request object 
      req.user = _id;
    }

    //carry on the request after the middleware
    next();
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
