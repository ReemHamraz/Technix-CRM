const express = require('express');
const router = express.Router();

router.post('/book', async (req, res) => {
    try {
        const { name, email, date, time } = req.body;
        // Add your demo booking logic here
        // For example, save to database and send confirmation email
        
        res.json({ success: true, message: 'Demo scheduled successfully' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

module.exports = router;