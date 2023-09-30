const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'User cannot be blank']
    },
    password:{
        type: String, 
        required: [true, 'Password cannot be blank']
    },
})
module.exports = mongoose.model('User', userSchema);