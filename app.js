var express = require("express");
var bodyParser = require("body-parser")

var app = express();



app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
        res.render('index');
});

app.get('/contact', function(req, res) {
        res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res) {
        var data = {age: 33, job: 'ninjago', hobbies: ['eating', 'fighting', 'fishing']};
        res.render('profile', { person: req.params.name, data: data });
});

app.listen(process.env.PORT, process.env.IP);

