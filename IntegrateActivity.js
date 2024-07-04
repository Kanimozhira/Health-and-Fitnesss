const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/health_fitness', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

const activitiesRouter = require('./routes/activities');
const usersRouter = require('./routes/users');
const dietsRouter = require('./routes/diets');

app.use('/activities', activitiesRouter);
app.use('/users', usersRouter);
app.use('/diets', dietsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

