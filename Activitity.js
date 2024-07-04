const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  caloriesBurned: { type: Number, required: true }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
