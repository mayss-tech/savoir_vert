const mongoose =require('mongoose');

const fournitureSchema= mongoose.Schema({
    image:String,
    name: String,
    desc:String,
    price:Number,
    qtn: {
        type:Number,
        default:1
    }

});
module.exports= Fourniture= mongoose.model('Fourniture', fournitureSchema);