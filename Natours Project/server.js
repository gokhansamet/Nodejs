const dotenv = require('dotenv');
// To set environment variable from the .env file
dotenv.config({ path: './config.env' });
const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application is working on port ${port}`);
});
