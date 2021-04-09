const user = require('../user');
const { Router} = require('express');
var bcrypt = require('bcryptjs');

const router = Router();



//// getting all user from panel///
router.get ('/:id', async(req,res)=>{
    try{
        const allUsers = await users.find();
        if(!allUsers)
        throw new Eroor ('error in proccessing user extraction');
        res.status(200).json(allUsers);

    }catch{
        res.status(500).json ({message:error.message});
    }
});
