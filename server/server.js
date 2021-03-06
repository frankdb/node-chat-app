const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);
// what we get back is our web sockets server - io. on here we can do anything we want in terms of emitting or listening to events. this is how we're going to communicate between the server and client

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

  socket.on('createMessage', (message, callback) => {
    console.log('Create Message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  })

  // socket.on('createLocationMessage', (coords) => {
  //   io.emit('newMessage', generateMessage('Admin', `${coords.latitude}, ${coords.longitude}`));
  // })

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  })
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

  
