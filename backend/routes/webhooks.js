const express = require('express');
const router = express.Router();
const ClerkUser = require('../models/ClerkUser');
const { Webhook } = require('svix');

// @route   POST /api/webhooks/clerk
// @desc    Handle Clerk webhook events
// @access  Public (but verified with Svix)
router.post('/clerk', async (req, res) => {
    try {
        // Get the headers and body
        const headers = req.headers;
        const payload = req.body;

        // Get the Svix headers for verification
        const svix_id = headers['svix-id'];
        const svix_timestamp = headers['svix-timestamp'];
        const svix_signature = headers['svix-signature'];

        // If there are no headers, error out
        if (!svix_id || !svix_timestamp || !svix_signature) {
            return res.status(400).json({
                success: false,
                message: 'Error occured -- no svix headers'
            });
        }

        // Create a new Svix instance with your webhook secret
        const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        let evt;

        // Verify the webhook
        try {
            evt = wh.verify(JSON.stringify(payload), {
                'svix-id': svix_id,
                'svix-timestamp': svix_timestamp,
                'svix-signature': svix_signature,
            });
        } catch (err) {
            console.error('Error verifying webhook:', err);
            return res.status(400).json({
                success: false,
                message: 'Error occured'
            });
        }

        // Handle the webhook event
        const eventType = evt.type;

        if (eventType === 'user.created') {
            const { id, email_addresses, first_name, last_name, image_url } = evt.data;

            // Create user in our database
            const newUser = await ClerkUser.create({
                clerkId: id,
                email: email_addresses[0].email_address,
                firstName: first_name,
                lastName: last_name,
                profileImageUrl: image_url
            });

            console.log(`✅ User created in DB: ${newUser.email}`);
        }

        if (eventType === 'user.updated') {
            const { id, email_addresses, first_name, last_name, image_url } = evt.data;

            // Update user in our database
            await ClerkUser.findOneAndUpdate(
                { clerkId: id },
                {
                    email: email_addresses[0].email_address,
                    firstName: first_name,
                    lastName: last_name,
                    profileImageUrl: image_url,
                    updatedAt: new Date()
                }
            );

            console.log(`✅ User updated in DB: ${email_addresses[0].email_address}`);
        }

        if (eventType === 'user.deleted') {
            const { id } = evt.data;

            // Optionally delete or deactivate user in our database
            await ClerkUser.findOneAndDelete({ clerkId: id });

            console.log(`✅ User deleted from DB: ${id}`);
        }

        res.status(200).json({
            success: true,
            message: 'Webhook processed'
        });

    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({
            success: false,
            message: 'Webhook handler failed'
        });
    }
});

module.exports = router;
