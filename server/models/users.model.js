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

saveUser(examplseUser);

async function getAllUsers(){
    return await users.find({});
} // getAllUsers

async function saveExampleUser(){
     await saveUser(examplseUser);
} 


module.exports = {
    saveExampleUser,
    getAllUsers,
    saveUser
}
