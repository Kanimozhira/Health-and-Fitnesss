// models/Diet.js
const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mealType: { type: String, required: true },
  foodItems: { type: [String], required: true },
  caloriesIntake: { type: Number, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Diet = mongoose.model('Diet', dietSchema);

module.exports = Diet;
