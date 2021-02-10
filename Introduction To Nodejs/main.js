const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/" || path === "/overview") {
    res.end("Hello from the server");
  } else if (path === "/product") {
    res.end("This is a product page");
  } else {
    res.writeHead(400, {
      "Content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("Page Not Found!");
  }
});

server.listen(8000, "localhost", () => {
  console.log("Listening to request on port 8000 is successful");
});
