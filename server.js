var http_ip = process.argv[2];
var http_port = process.argv[3];

var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/', function (req, res) {
});

app.get('/about', function (req, res) {
	res.sendFile('./public/about.html', { root : __dirname});
});

var server = app.listen(http_port, function () {
	var host = http_ip;
	var port = http_port;

	console.log('amccann_io at http://%s:%s', host, port);
});