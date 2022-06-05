const express=require('express')
const userRouter = require('./routes/user.routes')
const app=express()
const connectDb = require('./config/connectDb')

app.use(express.json())
app.use('/user',userRouter)
require('dotenv').config()

const PORT = 5000||process.env.PORT
connectDb()



app.listen(PORT,(err) =>{
if(err) throw console.log(err)
console.log("listen to port " +PORT)
})