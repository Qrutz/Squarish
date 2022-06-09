const posts = require('./post.mongo');




async function savePost(post){
    await posts.create({}, post, {
        upsert: true,
    });
} // savePost




module.exports = {
    savePost,
}