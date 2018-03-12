var http = require('http');
 
// Request options
var options = {
   host: 'localhost', //The address of VM2
   port: '8888', // The port of VM2
   path: ''
};
 
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
   });
}
// Send Request
var req = http.request(options, callback);
req.end();
