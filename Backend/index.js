const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
var anythingRouter = require('./routes/anything')
var commentRouter = require('./routes/comment')

const PORT = 3004||process.env.PORT;

app.get('/',(req,res) => {
    

   res.status(200).json('Hello Server')
})



//To use Different routes
app.use('/anything',anythingRouter)
app.use('/comment',commentRouter)

app.listen(PORT,() =>{
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
})