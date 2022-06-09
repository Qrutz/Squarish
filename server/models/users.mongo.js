const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: {
        type: String,
        required: true,
        min: 5
    },
    profilePicture: {
        required: false,
        type: String,
        default: ''
    },
    following: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    bio: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
    
    

module.exports = mongoose.model("User", usersSchema);