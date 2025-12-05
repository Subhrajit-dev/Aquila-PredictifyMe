# MongoDB Atlas Setup Guide

## Quick Setup Steps:

### 1. Create MongoDB Atlas Account
- Go to: https://www.mongodb.com/cloud/atlas/register
- Sign up with Google or Email (FREE)

### 2. Create a FREE Cluster
1. After login, click "Build a Database"
2. Choose **FREE** (M0 Sandbox) tier
3. Select Cloud Provider: AWS (recommended)
4. Select Region: Mumbai (ap-south-1) or closest to you
5. Click "Create"

### 3. Create Database User
1. You'll see "Security Quickstart"
2. Choose "Username and Password"
3. Create a username (e.g., `predictifyme_admin`)
4. Create a strong password (save it!)
5. Click "Create User"

### 4. Set Network Access
1. Click "Add My Current IP Address"
2. OR click "Allow Access from Anywhere" (for development only)
3. Click "Finish and Close"

### 5. Get Connection String
1. Click "Database" in left sidebar
2. Click "Connect" button on your cluster
3. Choose "Drivers"
4. Select "Node.js" and version "4.1 or later"
5. Copy the connection string

It will look like:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 6. Update Your .env File

Open `backend/.env` and replace the MONGODB_URI line with:

```env
MONGODB_URI=mongodb+srv://predictifyme_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/predictifyme?retryWrites=true&w=majority
```

**Replace:**
- `predictifyme_admin` with your username
- `YOUR_PASSWORD` with your actual password
- `cluster0.xxxxx` with your actual cluster address
- Add `/predictifyme` before the `?` to specify the database name

### 7. Test Connection

Run the backend server:
```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 5000
```

## Troubleshooting

### Error: "MongoServerError: bad auth"
- Check username and password are correct
- Make sure password doesn't have special characters (or URL encode them)

### Error: "MongooseServerSelectionError"
- Check network access settings in Atlas
- Make sure your IP is whitelisted
- Try "Allow Access from Anywhere" temporarily

### Connection String Special Characters
If your password has special characters, encode them:
- `@` → `%40`
- `:` → `%3A`
- `/` → `%2F`
- `?` → `%3F`

## Example Complete .env File

```env
PORT=5000
MONGODB_URI=mongodb+srv://predictifyme_admin:MyPass123@cluster0.abc123.mongodb.net/predictifyme?retryWrites=true&w=majority
JWT_SECRET=predictifyme_super_secret_key_2024
JWT_EXPIRE=7d
NODE_ENV=development
```

## Need Help?

If you get stuck, share the error message and I'll help you fix it!
