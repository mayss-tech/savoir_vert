const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    image : String,
    name : String,
    fourniture:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"Fourniture"}
    ]
})
module.exports = Category = mongoose.model('Category', categorySchema)