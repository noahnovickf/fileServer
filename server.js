const net = require("net");
const server = net.createServer();
const fs = require("fs");

server.on("connection", client => {
  console.log("New client connected!");
  //client.write("Hello there! What file would you like to access data from?");
  client.setEncoding("utf8");

  client.on("data", data => {
    fs.readFile(`./${data}.txt`, (error, dataFromFile) => {
      client.write(dataFromFile);
    });
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
