const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body,validationResult } = require('express-validator');



router.get('/createuser',[
    body('email').isEmail(),
    body('name').isLength({min: 3}),

], async (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
try{
    let user = user.findOne ({email: res.body.email});
    if(user){
        return res.status(400).json({errors: errors.array()});
    }
    let User = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    })
    res.json(user)
} catch(error) {
    console.error(error.message);
    res.status(400).send("some error ocurred.");
}
    

        
      
    
})


module.exports = router;