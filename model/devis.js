const mongoose =require('mongoose');
const devisSchema= mongoose.Schema({
name: String,
society:String,
email:String,
phone:Number,
post:Number,
typeOfService :[{
    conception:  
    {type:Boolean,
    default: false},
    replanning:
    {type:Boolean,
    default:false},
    plantSupply:
    {type:Boolean,
    default:false},
    irrigationSystem:
    {type:Boolean,
    default:false}
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