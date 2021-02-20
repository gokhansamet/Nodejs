const express = require('express');
const fs = require('fs');
const app = express();
// For using req.body
app.use(express.json());

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

// Reading a data from a file using synchronous way
// It is okay because it is a top-level-code it executes once after the code starts
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours: tours, // Just writing tours is enough
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1; // To convert string to int
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'Success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  // To assign an id, while we use database we don't assign an id manuel because database assigns automically
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'Success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
app.route('/api/v1/tours').get(getAllTours).post(createTour);
// To create a varaible which in the URL use (:) without parantheses then write a parameter name
// Ex. :category
// To create an optional variable use (?) after the parameter name
// Ex. :category?
app.route('/api/v1/tours/:id').get(getTour);

const port = 3000;
app.listen(port, () => {
  console.log(`Application is working on port ${port}`);
});
