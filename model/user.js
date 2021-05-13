const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    role:{
        type:String,
        default:"user"
    },
    name:{
        type: String,
    
    },
    telephone:{
        type:String,
    
    },
    email:{
        type: String,
    
    },
    password:{
        type:String,
     
    },
    adress:{
        type:String,
    
    },
    codePostal:Number
});
module.exports = User = mongoose.model('user',userSchema)