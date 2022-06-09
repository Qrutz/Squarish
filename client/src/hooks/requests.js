const API_URL = 'http://localhost:5000/api';

async function getUsers() {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return data;
}