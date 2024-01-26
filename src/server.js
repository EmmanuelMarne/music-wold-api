const express = require("express");
const routers = require("./routes");

const server = express();

// desactivar informacion de express en el header
server.disable('x-powered-by')

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// server.get("/", (req, res) => {
//   res.send("Hi, welcome to server's guitars");
// });

server.use(routers);

module.exports = server;
