const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/health_fitness', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
const workoutsRouter = require('./routes/workouts');
const dietsRouter = require('./routes/diets');

app.use('/users', usersRouter);
app.use('/workouts', workoutsRouter);
app.use('/diets', dietsRouter);

// Example Hello World Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
