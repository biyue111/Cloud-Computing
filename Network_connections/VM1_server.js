var http = require('http');
 
// Request options
var options = {
   host: '192.168.56.102', //The address of VM2
   port: '8889', // The port of VM2
   path: ''
};

var body_data;

// Callback function
var callback = function(response){
   // Update
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // End 
      
    console.log(body);
    body_data = body;
   });
}
// Send Request

var http = require('http');

http.createServer(function (request, response) {

    
//    var fs = require("fs");

  //  var data = fs.readFileSync('input.txt');

    //console.log("File Read" + data.toString());
 
    var req = http.request(options, callback);
    req.end();
    // Send HTTP header 
    // HTTP state value: 200 : OK
    // Content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send response "Hello World"
    response.end(body_data);
}).listen(8888);

console.log('VM1 Server running at port 8888/');
