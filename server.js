// take arguments at startup
if (process.argv[2] == "")  throw "Error: no ip specified in argument 1";
if (process.argv[3] == "")  throw "Error: no port specified in argument 2";

var http_ip = process.argv[2];
var http_port = process.argv[3];

var express = require('express');
var app = express();

//Uses
app.use(express.static('public'));



// Routes
app.get('/', function (req, res) {
});

app.get('/projects', function (req, res) {
	res.sendFile('./public/projects.html', { root : __dirname});
});

//The 404 Route
app.get('*', function(req, res){
	res.send('Error: 404, page not found.', 404);
});

// end Routes

//start server
var server = app.listen(http_port, function () {
	var host = http_ip;
	var port = http_port;

	console.log('amccann_io at http://%s:%s', host, port);
});