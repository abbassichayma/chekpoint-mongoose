const mongoose=require('mongoose')


const connectDb=async()=>{
    try {
        await mongoose.connect.mongoose(process.env.MONGO_URI);
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb