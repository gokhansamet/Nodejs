const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
// We use synchronous way because the code below just executed once.
// The codes below read the data from html once
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
dataObj.map((el) => (el["slug"] = slugify(el.productName, { lower: true })));

const replaceTemplate = require("./modules/replaceTemplate");

const server = http.createServer((req, res) => {
  const path = req.url;
  const { query, pathname } = url.parse(req.url, true);
  // The overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
  } else if (pathname.includes("/product")) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    // To become more readable use the slugify ---> Ex :  /product/apollo-broccoli
    const slug = pathname.replace("/product/", "");
    const product = dataObj.filter((el) => {
      return el.slug === slug;
    })[0];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (pathname === "/api") {
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
