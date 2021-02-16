const fs = require("fs");
const superagent = require("superagent");
const readFilePro = require("./modules/read-file-pro");
const writeFilePro = require("./modules/write-file-pro");

const getDogPic = async () => {
  try {
    // Read
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`${data}`);

    // Get data from API
    const resPro1 = superagent.get(`https://dog.ceo/api/${data}/image/random`);
    const resPro2 = superagent.get(`https://dog.ceo/api/${data}/image/random`);
    const resPro3 = superagent.get(`https://dog.ceo/api/${data}/image/random`);
    // To process all data at same time
    const all = await Promise.all([resPro1, resPro2, resPro3]);
    const imgs = all.map((img) => img.body.message);

    console.log(imgs);
    // Write
    await writeFilePro("dog-writing.txt", imgs.join("\n"));
    console.log("Success 👍");
  } catch (error) {
    console.log(error);
  }
};

getDogPic();
