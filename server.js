"use strict";
const http = require("http");
const debug = require("debug")("nodestr:srver");
const express = require("express");

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set("port", port);

const server = http.createServer(app);
const router = express.Router();

let route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "bem vindo",
    version: "1.0.0"
  });
});
app.use("/", route);
server.listen(port);
server.on('error',onError);
console.log('runing......');

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + 'Requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + 'is already in use');
      process.exit(1);
      break;

    default:
      throw error;
  }
}