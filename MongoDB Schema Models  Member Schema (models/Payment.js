const mongoose = require('mongoose');
 const paymentSchema = new mongoose.Schema({
 memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
 amount: Number,
 paymentDate: { type: Date, default: Date.now },
 paymentType: { type: String, enum: ['Membership', 'Personal Training', 'Class'], required: true },
 status: { type: String, enum: ['Completed', 'Failed'], default: 'Completed' },
 });
 const Payment = mongoose.model('Payment', paymentSchema);
 module.exports = Payment;
