var express = require('express');
var app = express();
app.use(express.static('public'));
var body = require('body-parser');
var aa = body.urlencoded({ extended: false });
var url = require('url');
app.get('/register', function(req, res) {
    res.sendFile(__dirname + "/public/register.html");
});
app.get('/login', function(req, res) {
    res.sendFile(__dirname + "/public/login.html");
});
app.get('/register_action', function(req, res) {
    var query = url.parse(req.url, true).query;
    console.log("query is %s :", query);
    var username = query.username;
    var password = query.password;
    console.log("username and password is %s %s :", username, password);
    res.write(username + " " + password);
    res.end();
});
app.post('/login_action', aa, function(req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    res.write(username);
    res.end();
});
var server = app.listen(4040, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + " " + port);
});
