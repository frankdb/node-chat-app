const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);
// what we get back is our web sockets server - io. on here we can do anything we want in terms of emitting or listening to events. this is how we're going to communicate between the server and client

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  })
});
// io.on lets you register an event listener. we can listen for a specific event and do something when that event happens.
// connection - lets you listen for a new connection (client connected to the server) and it lets you do something when that connection comes in. in order to do something - callback function. socket argument. this represents the individual socket

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

