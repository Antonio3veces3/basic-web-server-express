const jwt = require('jsonwebtoken');

const generateJWT= async( uid = '')=>{
    return new Promise((resolve, reject)=>{
        const payload = {uid};

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn: '7d'
        }, (err,token)=>{
            if(err){
                console.log(err);
                reject(`We can't generate the JWT`)
            }else{
                resolve(token);
            }
        })
    })
}

module.exports = {
    generateJWT,
}