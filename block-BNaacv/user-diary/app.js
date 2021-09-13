var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose")
var userRouter =require('./router/users')
//mongoose
mongoose.connect(
    'mongodb://localhost:27017/user-diary',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      console.log(err ? err : 'Connected to Database');
    }
  );
//middleware
  app.use(express.json())
  app.use(express.urlencoded({extended : false}))
  app.use(express.static(__dirname + '/public'))

  //set view engine
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname ,"views"))

//router
app.use('/users', userRouter )




  //error meddleware
  app.use((req,res,next) => {
    res.send("404 page is not found")
})



app.listen(3000, ()=>{
    console.log("server is listening on port");
})