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
const updateTour = (req, res) => {
  res.status(200).json({
    status: 'Update',
  });
};

const deleteTour = (req, res) => {
  res.status(200).json({
    status: 'Delete',
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'Error',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'Error',
  });
};

// The variables below are a middleware that related routers
const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
// Mounting that means is creating new router on the route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Application is working on port ${port}`);
});
