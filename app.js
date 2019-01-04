var http = require("http");

var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// create read stream
myReadStream.on('data', function(chunk){
   console.log('new chunk received:');
   myWriteStream.write(chunk);
});




// var server = http.createServer(function(req, res){
//         console.log('request was made ' + req.url);
//         // create response headers
//         res.writeHead(200, {'Content-Type' : 'text/plain'});
//         res.end('Hey ninjago');
// });

// server.listen(process.env.PORT, process.env.IP, function() {
//     console.log('yo dawgs, now lstening to port 8080');
// });
