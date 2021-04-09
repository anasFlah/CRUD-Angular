const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
///require shema of the user 
const User = require ('./user.js');
require('dotenv/config');
///middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connecting db
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true },()=>{
    console.log('connected DB');
})

///routing
///sending req from login component 
app.post('/Login',async(req,res)=>{
    console.log('req.body');
    var email = req.body.email ;
    var password = req.body.password ;
    var compare = '';
    await User.findOne({email:email},(error,data)=>{
        compare = data;
    })
    console.log('done:',compare);
    if(email === compare.email && password === compare.password){
        console.log('accepted user');
        res.send({status:'200ok',email:compare.email,password:compare.password})
    }else{
        console.log('wrong crediential');
    }
})
//sending req from signup component 
app.post('/siginup',async (req,res)=>{
    console.log('req.body');
    var email = req.body.email
    var password = req.body.password 
    User.create({
        email : email ,
        password: password,

    })
    console.log('your data has been saved');

})






//port
app.listen(3000);