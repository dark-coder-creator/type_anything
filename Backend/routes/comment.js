var express = require('express')
var bodyParser = require('body-parser')
var Anything = require('../models/anythingSchema')
var Comment = require('../models/commentSchema')

var router = express.Router();
router.use(bodyParser.json());

router.post('/',(req,res) => {
      const { name , comment } = req.body

      const Comments = new Comment({ name:name,comment:comment })
      Comments.save(function(err) {
          if(err)
          {
            console.log(err)
          }
      })
      res.status(200).json("The Comments are entered successfully");
})


module.exports = router