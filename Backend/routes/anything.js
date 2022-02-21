var express = require('express')
var bodyParser = require('body-parser')
var anythingSchema = require("../models/anythingSchema")

var router = express.Router()
router.use(bodyParser.json())
router.get('/',(req,res) => {
     console.log(anythingSchema)
     const { description , name } = req.body

   

     const Anything = new anythingSchema({ description:description,name:name})
     Anything.save(function(err) {
         if(err)
         {
             console.log(err)
         }
     })
    res.status(200).json("The Result sent successfully")
})

router.get('/hello',(req,res) => {
    const username = req.body.username
    res.status(200).json('Hello '+username)
})
module.exports =  router 