var express = require('express')
var bodyParser = require('body-parser')
var anythingSchema = require("../models/anythingSchema")

var router = express.Router()
router.use(bodyParser.json())
//to create a anything post
router.post('/',(req,res) => {
     console.log(anythingSchema)
     const { description , name , like , unlike } = req.body

   

     const Anything = new anythingSchema({ description:description,name:name,like:like,unlike:unlike})
     Anything.save(function(err) {
         if(err)
         {
             console.log(err)
         }
     })
    res.status(200).json("The Result sent successfully")
})

//to display all data
router.get('/data',(req,res) => {
    anythingSchema.find({},function(err,result) {
        if(err)
        {
            console.log(error)
        }
        else if(result)
        {
            res.status(200).send(result)
        }
    })
    
})

 //621c6b71b49b9e19496e550c
 const userId = '621c6b71b49b9e19496e550c';

 //to like that quote
 router.post('/like/:userId',(req,res) => {
    const { like } = req.body  
   
    let userId = req.params.userId

     anythingSchema.findByIdAndUpdate(userId , { like:like },function(err,docs) {
        if(err) 
        {
            console.log(err)
        }
        else {
            res.status(200).json(docs)
        }
     })
 })

 //to unlike the quote 
router.post('/unlike/:userId',(req,res) => {
    const { unlike } = req.body;

    let userId = req.params.userId;

    anythingSchema.findByIdAndUpdate(userId,{unlike:unlike},function(err,docs) {
        if(err)
        {
            console.log(err)
        }
        else 
        {
            res.status(200).json(docs)
        }
    })
})




  //to get that like using that userId
  router.get('/like/:userId',(req,res) =>{
      let userId = req.params.userId

      anythingSchema.findById(userId,function(err,docs) {
          if(err)
          {
              console.log(err)
          }
          else {
              res.status(200).json(docs.like)
          }
      })

  })



router.get('/hello',(req,res) => {
    const username = req.body.username
    res.status(200).json('Hello '+username)
})
module.exports =  router 