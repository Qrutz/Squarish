const users = require("./users.mongo");


const examplseUser = {
    name: "John Doe",
    username: "johndoe",
    email: "JohnDoe@outlook.com",
    password: "123456",
    friends: ['Henry', 'Jane', 'Bob'],
    createdAt: Date.now() 
}

async function saveUser(user){
    await users.findOneAndUpdate({
        username: user.username
    }, user, {
        upsert: true,
    });
} // saveUser

async function getAllUsers(){
    return await users.find({});
} // getAllUsers

async function getAmmountOfFollowers(username){
    const user = await users.findOne({username});
    return user.followers.length;
} // getAmmountOfFollowers

async function getAmmountOfFollowing(username){
    const user = await users.findOne({username});
    return user.following.length;
} // getAmmountOfFollowing






module.exports = {
    saveUser,
    getAllUsers,
    getAmmountOfFollowing,
    getAmmountOfFollowers
}
