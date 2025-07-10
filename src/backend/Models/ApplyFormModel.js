const mongoose = require('mongoose');

const applyFormSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  programType: { type: String, required: true },
  course: { type: String, required: false },
  internship: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

const ApplyFormModel = mongoose.model('ApplyForm', applyFormSchema, 'applyForms');
module.exports = ApplyFormModel;