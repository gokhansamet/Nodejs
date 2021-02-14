const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (!err) {
  //     res.end(data);
  //   } else {
  //     console.log(err);
  //   }
  // });

  // Solution 2 : Streams
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });

  //Solution 3 : Solving Backpressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDestination);
});

server.listen(3000, "localhost", () => {
  console.log("Listening port on 3000");
});
