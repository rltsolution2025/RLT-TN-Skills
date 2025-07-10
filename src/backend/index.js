const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');       
const applyFormRoutes = require('./Routes/ApplyFormRoute');
const contactFormRoutes = require('./Routes/ContactFormRoute');    
const ConnectDB = require('./Config/ConnectDB');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 10000;
// Middleware
app.use(cors());    
app.use(express.json());
// Connect to MongoDB   
ConnectDB();

// Routes
app.use('/api', applyFormRoutes);
app.use('/api', contactFormRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


