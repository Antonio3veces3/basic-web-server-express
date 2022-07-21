const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'],
    },
    mail:{
        type: String, 
        required: [true, 'Mail is required'],
        unique: true
    },
    password:{
        type: String, 
        required: [true, 'Password is required'],
    },
    img:{
        type: String,
        required: false,
        default: null
    },
    role:{
        type: String, 
        required: true
    },
    status:{
        type: Boolean,
        required: false, 
        default: true
    },
    google:{
        type: Boolean, 
        required: false,
        default: false
    }
});

UserSchema.methods.toJSON = function (){
    const {__v, password, ... user} = this.toObject();
    return user;
};

module.exports=  model('Users', UserSchema);