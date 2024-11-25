const mongoose = require('mongoose');
 const classSchema = new mongoose.Schema({
 name: String, // e.g., "Yoga", "HIIT"
 trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
 schedule: {
 dayOfWeek: String,
 startTime: Date,
 endTime: Date,
 },
 members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
 });
 const Class = mongoose.model('Class', classSchema);
 module.exports = Class;
