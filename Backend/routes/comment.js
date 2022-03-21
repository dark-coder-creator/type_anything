var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Anything = require('../models/anythingSchema')
var Comment = require('../models/commentSchema')

var commentRouter = express.Router();
commentRouter.use(bodyParser.json());

commentRouter.post('/',(req,res) => {
      const { name , comment , anythingId , createdAt } = req.body
      console.log("anything id")
      console.log(anythingId)
      var id =new mongoose.Types.ObjectId(anythingId)
      console.log("id")
      console.log(id)
      const Comments = new Comment({ name:name,comment:comment,anythingId:id,createdAt })
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
       console.log(data.personalComments)
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