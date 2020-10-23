const express = require ('express')
const router1 = express.Router();
const db = require('../model/DataStore')

router1.post('/registration',async (req,res)=>{ 
    console.log(req.body);
    db.create({
               Firstname:req.body.Firstname,
                   Lastname:req.body.Lastname,
                   Fathername:req.body.Fathername,
                   Mothername:req.body.Mothername,
                   Mobile:req.body.Mobile
           }).then(res.send("successfully Registered"))
      
})


module.exports = router1