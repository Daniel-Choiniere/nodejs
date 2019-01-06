var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req, res){
        console.log('request was made ' + req.url);
        if (req.url === '/home' || req.url === '/') {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                fs.createReadStream(__dirname + '/index.html').pipe(res);
        } else if (req.url === '/contact'){
                res.writeHead(200, {'Content-Type' : 'text/html'});
                fs.createReadStream(__dirname + '/contacts.html').pipe(res);
        } else if (req.url === '/api/ninjas') {
                var ninjas = [{name: 'ryu', age: 29}, {name : 'yoshi', age: 33}];
                res.writeHead(200, {'Content-Type' : 'application/JSON'});
                res.end(JSON.stringify(ninjas));
        } else {
                res.writeHead(404, {'content-Type' : 'text/html'});
                fs.createReadStream(__dirname + '/404.html').pipe(res);
        }
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log('yo dawgs, now lstening to port 8080');
});
