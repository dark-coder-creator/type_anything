const express = require('express')
const app = express()

var anythingRouter = require('./routes/anything')

const PORT = 3000||process.env.PORT;

app.get('/',(req,res) => {
    console.log(res)

   res.status(200).json('Hello Server')
})




app.use('/anything',anythingRouter)


app.listen(PORT,() =>{
    console.log(`SERVER IS LISTENING ON PORT ${PORT}`)
})