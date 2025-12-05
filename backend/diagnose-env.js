require('dotenv').config();

console.log('=== DIAGNOSTIC INFO ===\n');
console.log('MongoDB URI from .env:');
console.log(process.env.MONGODB_URI);
console.log('\nLength:', process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0);
console.log('\nFirst 50 characters:', process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 50) : 'N/A');
console.log('\nLast 50 characters:', process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(process.env.MONGODB_URI.length - 50) : 'N/A');

// Check for common issues
if (process.env.MONGODB_URI) {
    console.log('\n=== CHECKING FOR ISSUES ===');

    if (!process.env.MONGODB_URI.startsWith('mongodb+srv://') && !process.env.MONGODB_URI.startsWith('mongodb://')) {
        console.log('❌ Connection string does not start with mongodb:// or mongodb+srv://');
    } else {
        console.log('✅ Connection string starts correctly');
    }

    if (process.env.MONGODB_URI.includes('\n') || process.env.MONGODB_URI.includes('\r')) {
        console.log('❌ Connection string contains line breaks!');
    } else {
        console.log('✅ No line breaks found');
    }

    if (process.env.MONGODB_URI.includes(' ')) {
        console.log('⚠️  Connection string contains spaces');
    } else {
        console.log('✅ No spaces found');
    }

    if (process.env.MONGODB_URI.includes('YOUR_PASSWORD')) {
        console.log('❌ Password placeholder not replaced!');
    } else {
        console.log('✅ Password placeholder replaced');
    }
}
