const posts = require("../models/posts/post.mongo");

const {savePost} = require('../models/posts/post.model');

async function addPost(req, res) {
    const { title, content, createdBy, likes } = req.body;
    try {
        const post = new posts({
            title,
            content,
            createdBy,
            likes
        });
        await savePost(post);
        res.status(201).json({
            message: "Post created successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    addPost
}
