require('dotenv').config();

console.log('Testing MongoDB Connection...');
console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Found' : 'NOT FOUND');
console.log('Port:', process.env.PORT);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ SUCCESS! MongoDB connected successfully');
        console.log('Connected to:', mongoose.connection.name);
        process.exit(0);
    })
    .catch((err) => {
        console.log('❌ ERROR! MongoDB connection failed');
        console.log('Error message:', err.message);
        console.log('\nPossible issues:');
        console.log('1. Check if password in .env is correct');
        console.log('2. Check if IP address is whitelisted in MongoDB Atlas');
        console.log('3. Check if connection string is properly formatted');
        process.exit(1);
    });
