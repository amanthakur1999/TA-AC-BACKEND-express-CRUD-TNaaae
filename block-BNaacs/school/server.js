var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

app.use(express.json());

mongoose.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

app.use((req, res, next) => {
  res.locals.messages = 'Hello World';
  next();
});

//set view  engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// route

app.get('/', (req, res) => {
  var obj = { name: 'Aman', age: 22 };
  res.render('index', { object: obj });
});

app.get('/about', (req, res) => {
  var fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  res.render('about', { fruits: fruits });
});

app.listen(3000, () => {
  console.log('server is listening port 3k ');
});
