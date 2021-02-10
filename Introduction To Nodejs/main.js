const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/" || path === "/overview") {
    res.end("Hello from the server");
  } else if (path === "/product") {
    res.end("This is a product page");
  } else if (path === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(400, {
      "Content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("Page Not Found!");
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening to request on port 3000 is successful");
});
