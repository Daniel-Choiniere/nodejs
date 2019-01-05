var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req, res){
        console.log('request was made ' + req.url);
        // create response headers
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
        myReadStream.pipe(res);
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log('yo dawgs, now lstening to port 8080');
});
