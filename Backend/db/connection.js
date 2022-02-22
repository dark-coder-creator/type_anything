var mongoose = require('mongoose')


var mongoDB ='mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB,{ useNewUrlParser:true,useUnifiedTopology:true})
 
var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)

db.on('error',console.error.bind(console,'MongoDB Connection Error'))

module.exports = { db }
