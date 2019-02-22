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

  socket.on('createMessage', (message) => {
    console.log('Create Message', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  })
  // update create message listener. currently all we do is log the data to the screen. we want to emit a new message event to everybody
  // socket.emit emits an event to a single connection. io.emit emits an event to every single connection

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  })
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

