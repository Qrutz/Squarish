const API_URL = 'http://localhost:5000/api';

const axios = require('axios').default;

async function getTestUser(){
    const response = await fetch(`${API_URL}/users/Henryy`);
    const user = await response.json();
    return user;
}

async function getPostsByUser(username){
    const response = await fetch(`${API_URL}/posts/getAllPostByUser/Henryy`);
    const posts = await response.json();
    return posts;
}
async function getTimeLine(){
    const response = await fetch(`${API_URL}/posts//Henryy`);
    const posts = await response.json();
    return posts;
}
function createPost(content, createdBy){
    axios.post(`${API_URL}/posts/addPost`, 
    {
        content: content,
        createdBy: createdBy
    }
    ).then(response => {
        console.log(response);
    }
    ).catch(error => {
        console.log(error);
    }
    );
}




function LikePost(postId, username){
    axios.put(`${API_URL}/posts/likePost`, 
    {   
        username: username,
        postId: postId
       
    }
    ).then(response => {
        console.log(response);
    }
    ).catch(error => {
        console.log(error);
    }
    );
}
    




export {
    getTestUser,
    getPostsByUser,
    getTimeLine,
    createPost,
    LikePost
    
};

