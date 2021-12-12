// const express = require("express");
// const { createServer } = require("http");
// const { Server } = require("socket.io");
const net = require("net");

//WebServer
// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, { /* options */ });
//
// app.use('/',);
//
// io.on("connection", (socket) => {
//   console.log(socket.id);
// });
//
// httpServer.listen(3000);


//Connection to TCP
const client = net.createConnection({host: 'localhost',port: 8124}, () => {
  console.log('connected to TCP server');
  client.write('G02\r\n');
});
client.on('data', (data) => {
  console.log(data)
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});