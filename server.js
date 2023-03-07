const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    console.log("sending index.html");
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
});

let port = process.env.PORT || 8080;        // set our port
server.listen((port ), () => {
    console.log('server listening on *:' +port)
});