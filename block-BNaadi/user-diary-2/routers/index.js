let express = require('express');
let router = express.Router();
let User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('userForm.ejs');
});

router.post('/', (req, res , next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
    if (err) return res.redirect("/users/new");
    res.redirect('/users');
  });

});

router.get("/" , (req,res)=>{
    User.find({},(err, user)=>{
        if(err) return next(err);
        res.render('users' ,{user:user})
    })
})

router.get("/:id",(req, res)=>{
        var id = req.params.id;
        User.findById(id, (err , user)=>{
            if (err) return res.send(err);
            res.render("singleUser",{user: user})
        })
})

router.get('/:id/edit', (req,res) => {
    let id = req.params.id
    User.findById(id,(err,user) => {
        if(err) return res.send(err)
        res.render('editUser.ejs', {users : user})
    })
})

router.post('/:id', (req,res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body, (err,user) => {
        if(err) return next(err)
        res.redirect('/users/' + id)
    })
})

router.get('/:id/delete' ,(req, res, next)=>{
    User.findByIdAndDelete(req.params.id ,(err , user)=>{
        if(err) return next(err);
        res.redirect("/users")
    })

})

module.exports = router;