const fs = require("fs");

// Read async functions return a promise
module.exports = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("🤔 We couldn't find a data");
      resolve(data);
    });
  });
};
