//VM2 puts "Hello world" to port 8888

var http = require('http');

http.createServer(function (request, response) {

    // Send HTTP header 
    // HTTP state value: 200 : OK
    // Content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send response "Hello World"
    response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
