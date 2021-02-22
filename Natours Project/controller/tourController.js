const fs = require('fs');

// Reading a data from a file using synchronous way
// It is okay because it is a top-level-code it executes once after the code starts
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    results: tours.length,
    data: {
      tours: tours, // Just writing tours is enough
    },
  });
};

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
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
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'Update',
  });
};

exports.deleteTour = (req, res) => {
  res.status(200).json({
    status: 'Delete',
  });
};
