const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
var anythingRouter = require('./routes/anything')

const PORT = 3004||process.env.PORT;

app.get('/',(req,res) => {
    

   res.status(200).json('Hello Server')
})




app.use('/anything',anythingRouter)


app.listen(PORT,() =>{
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
})