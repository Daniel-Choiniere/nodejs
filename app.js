var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
        res.sendFile(__dirname + '/contacts.html');
});

app.get('/profile/:name', function(req, res) {
        var data = {age: 33, job: 'ninjago', hobbies: ['eating', 'fighting', 'fishing']};
        res.render('profile', { person: req.params.name, data: data });
});

app.listen(process.env.PORT, process.env.IP);

