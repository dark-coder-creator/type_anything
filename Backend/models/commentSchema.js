var mongoose = require('mongoose')

var db = require('../db/connection')

var Schema = mongoose.Schema;

var commentSchema = Schema({
    comment:String,
    name:String
})


module.exports = mongoose.model('Comment',commentSchema)