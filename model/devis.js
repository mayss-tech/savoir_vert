const mongoose =require('mongoose');

const devisSchema= mongoose.Schema({
name: String,
society:String,
email:String,
phone:Number,
post:Number,
typeOfService :[{
    conception:Boolean,
    replanning:Boolean,
    plantSupply:Boolean,
    irrigationSystem:Boolean
}],
area :[{
    ground:String,
    facade:String
}],
msg:String,
contact :[{
    day:String,
    hour:String
}]
});
module.exports= Devis= mongoose.model('Devis', devisSchema);