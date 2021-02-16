const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server side', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('You can post to the server');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Application is working on port ${port}`);
});
