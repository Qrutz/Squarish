const API_URL = 'http://localhost:5000/api';

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


export {
    getTestUser,
    getPostsByUser
    
};