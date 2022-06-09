const router = require('express').Router();
const User = require('../models/users.mongo');
const {saveUser} = require('../models/users.model');
const bcrypt = require('bcrypt'); 


async function AddNewUser(req, res) {
    const { username, password, name, email,profilePicture, bio,} = req.body;
    try {
        const user = new User({
            username,
            password,
            name,
            email,
            profilePicture,
            bio,
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await saveUser(user);
        res.status(201).json({
            message: "User created successfully"
        });

    } 
    catch (error) {
        console.log(error);
    }
}


async function logInUser (req, res)  {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }
        res.status(200).json({
            message: "User logged in successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    AddNewUser,
    logInUser
}