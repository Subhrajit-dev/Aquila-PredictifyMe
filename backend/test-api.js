const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

// Test data
const testUser = {
    name: 'Test User',
    email: 'test@predictifyme.com',
    password: 'Test1234'
};

async function testAPI() {
    console.log('🧪 Testing PredictifyMe Backend API\n');
    console.log('='.repeat(50));

    try {
        // Test 1: Health Check
        console.log('\n1️⃣  Testing Health Check...');
        const healthResponse = await axios.get(`${API_URL}/health`);
        console.log('✅ Health Check:', healthResponse.data.message);

        // Test 2: Register User
        console.log('\n2️⃣  Testing User Registration...');
        const registerResponse = await axios.post(`${API_URL}/auth/register`, testUser);
        console.log('✅ User Registered:', registerResponse.data.data.user.name);
        console.log('   Email:', registerResponse.data.data.user.email);
        console.log('   Token:', registerResponse.data.data.token.substring(0, 20) + '...');

        const token = registerResponse.data.data.token;
        const userId = registerResponse.data.data.user.id;

        // Test 3: Login User
        console.log('\n3️⃣  Testing User Login...');
        const loginResponse = await axios.post(`${API_URL}/auth/login`, {
            email: testUser.email,
            password: testUser.password
        });
        console.log('✅ User Logged In:', loginResponse.data.data.user.name);
        console.log('   Token:', loginResponse.data.data.token.substring(0, 20) + '...');

        // Test 4: Get User Profile
        console.log('\n4️⃣  Testing Get User Profile...');
        const profileResponse = await axios.get(`${API_URL}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Profile Retrieved:', profileResponse.data.data.user.name);
        console.log('   Subscription:', profileResponse.data.data.user.subscription.plan);

        // Test 5: Create Subscription
        console.log('\n5️⃣  Testing Create Subscription...');
        const subscriptionResponse = await axios.post(`${API_URL}/subscriptions/create`, {
            userId: userId,
            plan: 'Basic Plan',
            billingCycle: 'quarterly',
            isTrial: false
        });
        console.log('✅ Subscription Created:', subscriptionResponse.data.data.subscription.plan);
        console.log('   Status:', subscriptionResponse.data.data.subscription.status);
        console.log('   End Date:', new Date(subscriptionResponse.data.data.subscription.endDate).toLocaleDateString());

        // Test 6: Get Subscription
        console.log('\n6️⃣  Testing Get Subscription...');
        const getSubResponse = await axios.get(`${API_URL}/subscriptions/${userId}`);
        console.log('✅ Subscription Retrieved:', getSubResponse.data.data.subscription.plan);

        console.log('\n' + '='.repeat(50));
        console.log('🎉 All tests passed successfully!');
        console.log('='.repeat(50) + '\n');

    } catch (error) {
        console.error('\n❌ Test Failed:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Error:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
}

testAPI();
