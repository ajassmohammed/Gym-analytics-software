const mongoose = require('mongoose');
 const memberSchema = new mongoose.Schema({
 firstName: String,
 lastName: String,
 email: { type: String, unique: true },
 membershipType: { type: String, enum: ['Standard', 'Premium'], default: 'Standard' },
 startDate: { type: Date, default: Date.now },
 status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
 contact: {
 phone: String,
 address: String,
 }
 });
 const Member = mongoose.model('Member', memberSchema);
 module.exports = Member;
