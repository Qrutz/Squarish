const User = require('../models/user/users.mongo');
const {saveUser, getUser} = require('../models/user/users.model');
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

async function httpGetUser(req, res) {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
    }
}


async function httpGetAllUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error) {
        console.log("why why ");
    }

    

}






module.exports = {
    AddNewUser,
    logInUser,
    httpGetUser,
    httpGetAllUsers
}