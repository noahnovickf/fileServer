const net = require("net");
const conn = net.createConnection({
  host: "127.0.0.1",
  port: 3000
});

conn.setEncoding("utf8");

conn.on("connect", () => {
  conn.write("fakeFile");
});

conn.on("data", data => {
  console.log("Data from file is:", data);
});
