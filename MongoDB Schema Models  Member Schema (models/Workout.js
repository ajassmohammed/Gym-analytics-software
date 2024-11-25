 const mongoose = require('mongoose');
 const workoutSchema = new mongoose.Schema({
 memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
 date: { type: Date, default: Date.now },
 exercises: [{
 name: String,
 sets: Number,
 reps: Number,
 weight: Number,
 }],
 durationMinutes: Number, // Duration of the workout
 caloriesBurned: Number,  // Optional field for calorie tracking
 });
 const Workout = mongoose.model('Workout', workoutSchema);
 module.exports = Workout;
