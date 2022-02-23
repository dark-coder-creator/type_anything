var mongoose = require('mongoose')
//var db = require('../db')
var db = require('../db/connection')


var Schema = mongoose.Schema;

var anythingSchema = Schema({
    description:String,
    name:String
})


module.exports = mongoose.model('Anything',anythingSchema)







