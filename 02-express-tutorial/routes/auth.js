const express = require('express');
const router = express.Router();


router.post('/',(req,res)=>{
    const {name} = req.body;
    if(name) {
        console.log(req.url)
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
})

module.exports = router;