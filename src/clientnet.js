const net = require('net');

const client = net.connect({ port: 8124, host: '127.0.0.1' }, function () {
    console.log('Client Connected');
    client.write('GeeksforGeeks\r\n');
});

client.on('data', function (data) {
    console.log('Received:', data.toString());
    client.end();
});

client.on('end', function () {
    console.log('Disconnected from server');
});

client.on('error', function (err) {
    console.error('Connection error:', err.message);
});
