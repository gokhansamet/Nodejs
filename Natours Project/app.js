const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
// For using req.body
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
//Using the middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  // use the next() to avoid getting stuck
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Mounting that means is creating new router on the route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
