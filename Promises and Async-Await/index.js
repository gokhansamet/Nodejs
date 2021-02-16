const fs = require("fs");
const superagent = require("superagent");
const callback = require("./callback-hell");
const readFilePro = require("./modules/read-file-pro");
const writeFilePro = require("./modules/write-file-pro");

// Callback Hell
//callback();

////////////////////// To fix the callback hell //////////////////////

// Solution 1: Using promise - Features of ES6

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     return superagent.get(`https://dog.ceo/api/${data}/image/random`);
//   })
//   .then((res) => {
//     return writeFilePro("dog-writing.txt", res.body.message);
//   })
//   .then(() => {
//     console.log("Success 👍");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Solution 2: Using async/await - Features of ES2017

const getDogPic = async () => {
  try {
    // Read
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`${data}`);
    // Get data from API
    const res = await superagent.get(
      `https://dog.ceo/api/${data}/image/random`
    );
    console.log(res.body.message);
    // Write
    await writeFilePro("dog-writing.txt", res.body.message);
    console.log("Success 👍");
  } catch (error) {
    console.log(error);
  }
};

getDogPic();
