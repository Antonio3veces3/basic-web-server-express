const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-JWT');


const login = async (req = request,res = response)=>{
    const { mail, password } = req.body;

    try {
        //Verify mail
        const user = await User.findOne({mail});
        if(!user) return res.status(400).json({
            error: `The mail ${mail} | doesn't exists`
        })

        //verify if the user is active
        if(!user.status) return res.status(400).json({
            error: `User ${user.name} doesn't exists | status: false`
        })
        
        //verify pass
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword) return res.status(400).json({
            error: `Invalid password`
        });

        //Generate JWT
        const token = await generateJWT(user.id);
        res.json({
            msg: 'Login OK',
            user,
            token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Contact the Admin"
        })
    }    
};

module.exports= {
    login
}