const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    tittle:{
        type:String
    },
    image:{
        type:String
    }
},{ timestamps: true })
module.exports= mongoose.model('post',postSchema)