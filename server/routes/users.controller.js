const {getAllUsers} = require('../../models/users.model');

async function httpGetAllUsers(req, res) {
    console.log("httpGetAllUsers");
    return res.status(200).json(await getAllUsers());
    
}

module.exports = {
    httpGetAllUsers
}