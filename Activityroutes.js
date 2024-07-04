const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');
const authenticateToken = require('../middleware/auth');

// Log a new activity
router.post('/', authenticateToken, async (req, res) => {
  const { type, duration, date, caloriesBurned } = req.body;
  try {
    const newActivity = new Activity({
      userId: req.user.id,
      type,
      duration,
      date,
      caloriesBurned
    });
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all activities
router.get('/', authenticateToken, async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user.id });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an activity
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    if (activity.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    await activity.remove();
    res.json({ message: 'Activity deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
