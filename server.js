const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const demoRoutes = require('./routes/demo');
const trialRoutes = require('./routes/trial');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/demo', demoRoutes);
app.use('/api/trial', trialRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});