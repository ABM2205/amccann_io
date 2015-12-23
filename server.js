var http_ip = '127.0.0.1';
var http_port = 8080;
var http = require('http');

var server = http.createServer(
	function(request, response){

		require('./router').get(request, response);

	}); 

//run the server
server.listen(http_port, http_ip);