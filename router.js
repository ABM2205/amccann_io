var url 		= require('url');  
var file_system = require('fs');


exports.get = function(request, response){

	//creates a string holding the request path in text
	var path = url.parse(request.url, true).pathname;

	if(path == "/" || path == "/home")
	{
		require('./home/home').get(request, response);
	}
	else
	{
		response.writeHead(404);
		response.end("<html> page doesn't exist </html>");
	}

};

