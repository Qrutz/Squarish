const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    friends: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", usersSchema);