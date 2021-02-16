const fs = require("fs");
const superagent = require("superagent");

module.exports = () => {
  fs.readFile("./dog.txt", (err, data) => {
    if (err) console.log("🤔 We couldn't find a data");
    superagent
      .get(`https://dog.ceo/api/${data}/image/random`)
      .end((err, res) => {
        if (!err) {
          fs.writeFile("./dog-writing.txt", res.body.message, (err) => {
            if (!err) {
              console.log("Success 😊");
            }
          });
        }
      });
  });
};
