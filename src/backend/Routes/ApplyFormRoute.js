const express = require('express');
const router = express.Router();
const ApplyFormModel = require('../Models/ApplyFormModel');
// const multer = require('multer');
// const path = require('path');


// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + path.extname(file.originalname));
//     }
//   })
// });
// POST route to handle form submission
router.post('/apply', async (req, res) => {
    try {
        const { fullName, email, phone, course,internship, programType } = req.body;
        const resume = req.file ? req.file.path : null;
    
        // Create a new application
        const newApplication = new ApplyFormModel({
        fullName,
        email,
        phone,
        course,
        internship,
        programType,
        resume
        });
    
        // Save the application to the database
        await newApplication.save();
    
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    }); 
// GET route to fetch all applications
router.get('/apply', async (req, res) => {
    try {
        const applications = await ApplyFormModel.find();
        console.log('Fetched applications:', applications); // Log the fetched applications
        res.status(200).json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//export the router
module.exports = router;