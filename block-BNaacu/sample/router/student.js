var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('students', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

router.get('/:id', (req, res) => {
  res.render('studentDetail', {
    student: { name: 'rahul', email: 'rahul@altcampus.io' },
  });
});
module.exports = router;
