const router = require("express").Router();
const passport = require("passport");


router.use('/' , require('./swagger'))
router.use("/users", require("./users"));
router.get('/', (req,res)=>{
  
    res.send('hello word')
});

modules.exports= router; 