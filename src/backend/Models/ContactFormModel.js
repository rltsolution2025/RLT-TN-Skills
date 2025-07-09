const mongoose = require('mongoose');
const contactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },   
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const ContactFormModel = mongoose.model('ContactForm', contactFormSchema, 'ContactForms');
module.exports = ContactFormModel;