const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body,validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser')
const JWT_SECRET = 'FEED';

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
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);

    let User = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    });
    const data = {
        user: {
            id: user.id,
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);

    res.json(authtoken);
} catch(error) {
    console.error(error.message);
    res.status(400).send("some error ocurred.");
}
})
    
router.post('/createuser',[
    body('email','Enter valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res) => {


    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors:errors.array() });
    }

    const {email,password} =req.body;
    try{
        let user = User.findOne(email);
        if(!user){
            return res.status(400).json( {error: "Please try to login with correct credentials" } );
        }

        const passwordCompare = bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json( { error: "Please try to login with correct credentials" } );
        }

        const data = {
            user: {
                id: user.id,
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);

        res.json(authtoken);


    } catch(error){
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
})
        
 
router.post('/getuser', fetchuser , async(req,res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("password");
        res.send(user);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
    



module.exports = router;