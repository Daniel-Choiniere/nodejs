var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req, res){
        console.log('request was made ' + req.url);
        // create response headers
        res.writeHead(200, {'Content-Type' : 'application/json'});
        
        var myObj = {
                name: 'Ryu',
                job: 'NInja', 
                age: 29
        };
        res.end(JSON.stringify(myObj));
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log('yo dawgs, now lstening to port 8080');
});
