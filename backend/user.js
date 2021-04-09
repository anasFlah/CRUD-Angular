const mongoose = require ('mongoose');
//creating schema 
var userSchema = new mongoose.Schema({
   email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
});

 var User = mongoose.model('user',userSchema);
 module.exports = User ;
