var express = require('express');

var mongoose = require('mongoose');

var path = require('path');
var studentRoute = require('./router/student');
var app = express();
mongoose.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

//set view  engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use('/student', studentRoute);

app.listen(3000, () => {
  console.log(' Server listening on port 3000');
});
