const net = require('net');

const server = net.createServer(function (socket) {
    console.log('Client connected');

    socket.write('Hello from server!\r\n');

    socket.on('data', function (data) {
        console.log('Received from client:', data.toString());
    });

    socket.on('end', function () {
        console.log('Client disconnected');
    });
});

server.listen(8124, function () {
    console.log('Server listening on port 8124');
});