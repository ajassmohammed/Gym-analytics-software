const express = require('express');
 const Member = require('../models/Member');
 const Workout = require('../models/Workout');
 const router = express.Router();
 // Get all members
 router.get('/members', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 });
 // Create a new member
 router.post('/members', async (req, res) => {
  const member = new Member({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    membershipType: req.body.membershipType,
    startDate: req.body.startDate,
    status: req.body.status,
    contact: {
      phone: req.body.phone,
      address: req.body.address,
    },
  });
  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
 });
 // Get all workouts
 router.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find().populate('memberId');
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 });
 // Create a new workout
 router.post('/workouts', async (req, res) => {
  const workout = new Workout({
    memberId: req.body.memberId,
    date: req.body.date,
    exercises: req.body.exercises,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
  });
  try {
    const newWorkout = await workout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
 });
 module.exports = router;
