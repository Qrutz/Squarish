const User = require('../models/user/users.mongo');
const {saveUser, getUser} = require('../models/user/users.model');
const bcrypt = require('bcrypt'); 
const {getAllPostsByFollowers} = require('../routes/posts.controller');
const jwt = require('jsonwebtoken');



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
                error: "Invalid password"
            });
        }
        const token = jwt.sign({
            username: user.username,
        }, "secret", {
            expiresIn: "1h"
        });



        res.status(200).json({
            message: "User logged in successfully",
            token: token // token is the key to access the user data
        });
    }
    catch (error) {
        console.log(error);
    }
}

 

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, 'secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log("middleware user", req.user);
        next();
    });
}

//create function that edits user bio
async function editUserBio(req, res) {
    const {username, bio} = req.body;
    if (username !== req.user.username) {
        return res.status(401).json({
            message: "You are not authorized to edit this user"
        });
    }
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        user.bio = bio;
        await saveUser(user);
        res.status(200).json({
            message: "User bio edited successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}


   


async function httpGetUser(req, res) {
    const { username } = req.params;
    if (username !== req.user.username) {
        return res.status(401).json({ message: "Unauthorized" });
    }
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
async function getFriendUserProfile(req, res) {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        // 
         // only get the users username, name,  bio, profile picture, followers,following, posts, _id
        const userProfile = {
            username: user.username,
            name: user.name,
            bio: user.bio,
            profilePicture: user.profilePicture,
            followers: user.followers,
            following: user.following,
            posts: user.posts,
            _id: user._id
        };
        res.status(200).json(userProfile);      
    } catch (error) {
    console.log(error);
}}





async function httpGetAllUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error) {
        console.log("why why ");
    }
}
async function followUser(req, res) {
    // username follow id 
    const { id } = req.params;
    const { username } = req.body;
    try { 
        const userToFollow = await User.findOne({ _id: id });
        const userThatGetFollowed = await User.findOne({ username }); 

        if (userThatGetFollowed.followers.includes(userToFollow.username) || userToFollow.following.includes(userThatGetFollowed.username)) {
            return res.status(500).json({
                message: "User is already following" 
            })
        }

        if (!userToFollow) {
            return res.status(404).json({
                message: "User not found"
            });
}
        userToFollow.following.push(username);
        userThatGetFollowed.followers.push(userToFollow.username);
        await userToFollow.save();
        await userThatGetFollowed.save();
        res.status(200).json({
            message: "User followed successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function getFollowings(req, res) {
    const  username  = req.user.username;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const followings = user.following;
        res.status(200).json(followings);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    AddNewUser,
    logInUser,
    httpGetUser,
    followUser,
    httpGetAllUsers,
    authenticateToken,
    editUserBio,
    getFriendUserProfile,
    getFollowings
    
}