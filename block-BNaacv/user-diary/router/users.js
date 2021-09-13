let express = require('express')
let router = express.Router();

router.get('/', (req,res) => {
    let list = ["Aman" ,"Ritesh" , "Abhay" , "Ranvijay"]
    res.render('users.ejs',{list : list})
})
router.get('/new', (req,res) => {
    res.render('userForm.ejs')
})

router.get('/:id', (req,res) => {
    res.render('singleUser.ejs', {name : "Aman" , age : 22})
})



router.post('/new', (req,res) => {
    res.send(req.body)
    console.log(req.body)
})

router.get("/:id/edit" , (req,res)=>{

})
router.put("/:id" , (req, res)=>{
    
})

module.exports = router