const express = require('express');
const ContactFormModel = require('../Models/ContactFormModel');
const router = express.Router();    

// POST route to handle contact form submission
router.post('/', async (req, res) => {  
    try {
        const { firstName, lastName, email, mobile, message } = req.body;

        // Log the incoming request body for debugging
        console.log('Received contact form submission:', req.body);

        // Validate incoming data
        if (!firstName || !lastName || !email || !mobile || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new contact form entry
        const newContactForm = new ContactFormModel({
            firstName,
            lastName,
            email,
            mobile,
            message
        });

        // Save the contact form entry to the database
        await newContactForm.save();
        console.log('Contact form entry saved successfully:', newContactForm);
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// GET route to fetch all contact form entries
router.get('/', async (req, res) => {   
    try {
        const contactForms = await ContactFormModel.find();
        res.status(200).json(contactForms);
    } catch (error) {
        console.error('Error fetching contact forms:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Export the router
module.exports = router;
