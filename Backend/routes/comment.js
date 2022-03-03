var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Anything = require('../models/anythingSchema')
var Comment = require('../models/commentSchema')

var router = express.Router();
router.use(bodyParser.json());

router.post('/',(req,res) => {
      const { name , comment , anythingId } = req.body

      const Comments = new Comment({ name:name,comment:comment,anythingId:anythingId })
      Comments.save(function(err) {
          if(err)
          {
            console.log(err)
          }
      })
      res.status(200).json("The Comments are entered successfully");
})
// {
//   from: 'comments',
//   localField: '_id',
//   foreignField: 'anythingId',
//   as: 'string'
// }

router.get('/personalComments',(req,res) =>{

 Anything.aggregate(
     [{
        $lookup:{
          from:"comments",
          localField:"_id",
          foreignField:"anythingId",
          as:"personalComments"
        }
     }]
 ,function(err,result) {
   if(err)
   {
     console.log(err)
     res.status
   }
   else 
   {
     console.log(result.length)
     res.status(200).json(result)
   }
 })
 



})


module.exports = router