const axios = require('axios');

async function testNewUser() {
    const timestamp = Date.now();
    const testUser = {
        name: 'John Doe',
        email: `user${timestamp}@predictifyme.com`,
        password: 'Test1234'
    };

    console.log('🧪 Testing Backend API with new user\n');

    try {
        // Register
        console.log('1. Registering user...');
        const regResponse = await axios.post('http://localhost:5000/api/auth/register', testUser);
        console.log('✅ Registered:', regResponse.data.data.user.email);
        const token = regResponse.data.data.token;
        const userId = regResponse.data.data.user.id;

        // Login
        console.log('\n2. Logging in...');
        const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
            email: testUser.email,
            password: testUser.password
        });
        console.log('✅ Logged in successfully');

        // Get Profile
        console.log('\n3. Getting profile...');
        const profileResponse = await axios.get('http://localhost:5000/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('✅ Profile:', profileResponse.data.data.user.name);

        // Create Subscription
        console.log('\n4. Creating subscription...');
        const subResponse = await axios.post('http://localhost:5000/api/subscriptions/create', {
            userId,
            plan: 'Pro Plan',
            billingCycle: 'yearly',
            isTrial: false
        });
        console.log('✅ Subscription:', subResponse.data.data.subscription.plan);
        console.log('   Status:', subResponse.data.data.subscription.status);

        console.log('\n🎉 All API tests passed!');
        console.log('\n✅ Backend is working perfectly!');

    } catch (error) {
        console.log('\n❌ Error:', error.response?.data || error.message);
    }
}

testNewUser();
