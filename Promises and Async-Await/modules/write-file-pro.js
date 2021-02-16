const fs = require("fs");

// Write async functions return a promise
module.exports = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject(err);
      resolve("It hasn't to be meaningful");
    });
  });
};
