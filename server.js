const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/applications', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Application Schema
const applicationSchema = new mongoose.Schema({
    robloxUsername: String,
    discordUsername: String,
    ageConfirmation: String,
    staffRole: String,
    pastExperience: String,
    whyPickYou: String,
    rdm: String,
    nlr: String,
    aa: String,
    moderatorCommands: String,
    status: { type: String, default: 'Pending' },
});

// Create Application Model
const Application = mongoose.model('Application', applicationSchema);

// API Endpoints
app.post('/api/applications', async (req, res) => {
    const application = new Application(req.body);
    await application.save();
    res.status(201).send(application);
});

app.get('/api/applications', async (req, res) => {
    const applications = await Application.find();
    res.status(200).send(applications);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});