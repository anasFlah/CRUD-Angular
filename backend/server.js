const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
///require schema of the user 
const User = require ('./user.js');
require('dotenv/config');
///middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connecting db
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true },()=>{
    console.log('connected DB');
})

///get request login
app.post('/getUser',async(req,res)=>{
    console.log(req.body)
    User.findOne({},(err,data)=>{
if(err){
    res.send({status:'404'},'connot get');
}else{
    res.send({status:'200ok'},'get work');
}
    })
})


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
/////updating user
app.post('/update',(req,res)=>{
User.findByIdAndUpdate(req.body.id,{email:req.body.email,password:req.body.password},(err,data)=>{
if(err){
    res.send(err);
}else{
    res.send({data:'has been updated'})
}
})
});


////delete user
app.post('/delete',(req,res)=>{
User.remove({_id:req.body.id},(err,data)=>{
    if(err){
        res.send('delete has been failed')
    }else{
        res.send('delete success')
    }
})
})




//port
app.listen(3005);