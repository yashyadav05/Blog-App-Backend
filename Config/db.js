const mongoose = require("mongoose")

const dataBase = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected Successfully")
    }
    catch(err){
        console.log("Something Wrong")
        console.log(err)
        process.exit(1)
    }
}

module.exports = dataBase