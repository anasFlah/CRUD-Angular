const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
require('dotenv/config');
///middlewares 
app.use('/test')

//connecting db
mongoose.connect(process.env.DB_CONNECTION ,{ useNewUrlParser: true },()=>{
    console.log('connected DB');
})

///routing
app.get ("/",(req,res)=>{
    res.send('home routes');
});
















//port
app.listen(3000);