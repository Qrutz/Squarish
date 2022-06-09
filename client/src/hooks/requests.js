const API_URL = 'http://localhost:5000/api';

export default async function getTestUser(){
    const response = await fetch(`${API_URL}/users/Henryy`);
    const user = await response.json();
    return user;
}

