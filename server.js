const express = require('express');
const app = express();
app.use(express.static('public'));
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });


    socket.on('socketup', (msg) => {
        io.emit('socketup', msg);
    });

    socket.on('socketright', (msg) => {
        io.emit('socketright', msg);
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});





