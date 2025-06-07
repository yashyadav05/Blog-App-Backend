const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    user:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model("like",likeSchema)