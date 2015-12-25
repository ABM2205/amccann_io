
var http_ip = process.argv[2];
var http_port = process.argv[3];

console.log("starting server @", http_ip, ":", http_port);
var http = require('http');

var server = http.createServer(
	function(request, response){

		require('./router').get(request, response);

	}); 

//run the server
server.listen(http_port, http_ip);