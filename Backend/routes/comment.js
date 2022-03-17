var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Anything = require('../models/anythingSchema')
var Comment = require('../models/commentSchema')

var commentRouter = express.Router();
commentRouter.use(bodyParser.json());

commentRouter.post('/',(req,res) => {
      const { name , comment , anythingId , createdAt } = req.body

      const Comments = new Comment({ name:name,comment:comment,anythingId:anythingId,createdAt })
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

commentRouter.get('/personalComments/:name',(req,res) =>{
 const name = req.params.name
 const comments = []
 Anything.aggregate(
     [{
        $lookup:{
          from:"comments",
          localField:"_id",
          foreignField:"anythingId",
          as:"personalComments"
        }
     },{
       $match:{
         name:name
       }
        
     }]
 ,function(err,result) {
   if(err)
   {
     console.log(err)
    
   }
   else 
   {
     console.log(result.length)
     result.map((data,index) => {
     
       for ( var i of data.personalComments)
       {
         comments.push(i)
       }
       
     })
    //console.log(comments)
     res.status(200).json(comments)
   }
 })
 



})


module.exports = commentRouter