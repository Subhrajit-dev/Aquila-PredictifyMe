const axios = require('axios');

async function quickTest() {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', {
            name: 'Test User',
            email: 'test@predictifyme.com',
            password: 'Test1234'
        });
        console.log('Success:', response.data);
    } catch (error) {
        console.log('Error Status:', error.response?.status);
        console.log('Error Data:', error.response?.data);
    }
}

quickTest();
