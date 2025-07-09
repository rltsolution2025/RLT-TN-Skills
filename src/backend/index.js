const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');       
const applyFormRoutes = require('./Routes/ApplyFormRoute');
const contactFormRoutes = require('./Routes/ContactFormRoute');    
const ConnectDB = require('./Config/ConnectDB');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());    
app.use(express.json());
// Connect to MongoDB   
ConnectDB();
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Static file serving
app.use(express.static(path.join(__dirname, 'public')));    
// Routes
app.use('/api/apply', applyFormRoutes);
app.use('/api/contact', contactFormRoutes); 
// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}   
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


