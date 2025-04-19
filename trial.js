const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, company } = req.body;
        // Add your free trial registration logic here
        // For example, create trial account and send welcome email
        
        res.json({ success: true, message: 'Trial account created successfully' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

module.exports = router;