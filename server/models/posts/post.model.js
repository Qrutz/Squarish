const posts = require('./post.mongo');

const examplePost = {
    title: "Example post",
    content: "This is an example post",
    createdBy: "5e9f8f8f8f8f8f8f8f8f8f8",
    createdAt: Date.now(),
    likes: 0
}



async function savePost(post){
    await posts.findOneAndUpdate({
        title: post.title
    }, post, {
        upsert: true,
    });
} // savePost


module.exports = {
    savePost,
}