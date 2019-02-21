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

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. What is going on?',
    createdAt: 123
  })
  // second argument - data you will send. you don't have to send anything.

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail)
  })
  // newEmail is data sent along with event

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  })
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

