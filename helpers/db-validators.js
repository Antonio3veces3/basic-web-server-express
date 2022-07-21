const Role = require('../models/role');
const User = require('../models/user');

const isRoleExists = async (role= '') => {

    const existsRole = await Role.findOne({ role });

    if (!existsRole) { 
        throw new Error(`The role ${role} doesn't exists`)
    };
};

const emailExists= async(mail= '')=>{
    const existsMail = await User.findOne({mail});
    if(existsMail) throw new Error(`The mail: ${mail}, already exists`);
}

const existUserID= async(id)=>{
    const existsID = await User.findById(id);
    if(!existsID) throw new Error(`The ID: ${id}, doesn't exists`);
}

const existUsername= async(name='')=>{
    const username = await User.findOne({ name });
    console.log(username);
    if (username) throw new Error ( `The Username: ${name} already exists` );
}
module.exports = {
    isRoleExists,
    emailExists,
    existUserID,
    existUsername
}