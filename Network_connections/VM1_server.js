var http = require('http');
var VM_1_port = 8888
var VM2_IP = '192.168.56.102'
var VM_2_port = 8889
 
// Request options
var options = {
   host: VM2_IP, //The address of VM2
   port: VM_2_port.toString(), // The port of VM2
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
}).listen(VM_1_port);

console.log('VM1 Server running at port ' + VM_1_port.toString());
