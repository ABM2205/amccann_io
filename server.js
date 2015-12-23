var http_ip = "192.168.13.37";
var http_port = 8080;
var http = require('http');

//a function which handles requests and send response
function handle_request(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

// a handle_request function is the parameter passed to the server object constructor
var server = http.createServer(handle_request); 

//run the server
server.listen(http_port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", http_port);
});