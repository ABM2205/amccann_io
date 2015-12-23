var file_system = require('fs');

exports.get = function(request, response){

file_system.readFile('./home/home.html', function (err, data) {
   if (err) {
       return console.error(err);
   }
   response.writeHead(200);
   response.end(data);
});

}