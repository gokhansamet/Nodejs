const express = require('express');
const fs = require('fs');
const app = express();
// For using req.body
app.use(express.json());
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello from the server side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to the server');
// });

// Reading a data from a file using synchronous way
// It is okay because it is a top-level-code it executes once after the code starts
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours: tours, // Just writing tours is enough
    },
  });
});

// To create a varaible which in the URL use (:) without parantheses then write a parameter name
// Ex. :category
// To create an optional variable use (?) after the parameter name
// Ex. :category?
app.get('/api/v1/tours/:id', (req, res) => {
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
});

// Create a tour with POST
app.post('/api/v1/tours', (req, res) => {
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
});

const port = 3000;
app.listen(port, () => {
  console.log(`Application is working on port ${port}`);
});
