var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(3001,function () {
    console.log('menedangarkan reques dari port 3001');
});
// Static file
app.use(express.static('public'));

// Socket setup
var io = socket(server);

let countUserOnline = 1
io.on('connection', function(socket) {
    console.log('socket konesi') 
});