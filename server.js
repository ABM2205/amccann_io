// take arguments at startup
// the first is ip, second is port
if (!process.argv[2])  throw "Error: no ip specified in argument 1";
if (!process.argv[3])  throw "Error: no port specified in argument 2";

var http_ip = process.argv[2];
var http_port = process.argv[3];

var express = require('express');
var app = express();

// using jade for out views
app.set('view engine', 'jade');

// Routes

app.get('/css/*', function(req, res){
	res.sendFile(__dirname + '/public'+ req.path);
});

app.get('/js/*', function(req, res){
	res.sendFile(__dirname + '/public'+ req.path);
});

app.get('/', function (req, res) {

	var ip = req.connection.remoteAddress;
	var first_digit = ip.search(/\d/);
	ip = ip.substr(first_digit, ip.length);


	res.render('../public/index', {'user_ip':ip});

});

app.get('/projects', function (req, res) {
	res.render('../public/projects');
});

app.get('/thissite', function (req, res) {
	res.render('../public/this_site');
});

//The 404 Route
app.get('*', function(req, res){
	res.status(404).send('Error: 404, page not found.', 404);
});// end Routes

//start server
var server = app.listen(http_port, function () {
	var host = http_ip;
	var port = http_port;
	console.log('amccann_io at http://%s:%s', host, port);
});