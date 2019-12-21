var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.listen(3000);

//<Route path="" component={}></Route>
app.get("/hello", function(req, res) {
    res.send("<font color=red>Method Get</font>");
});

app.post("/hello", function(req, res) {
    res.send("<font color=red>Method Get</font>");
});

app.get("/tintuc/:id", function(req, res) {
    var i = req.params.id;
    res.send("id =" + i);
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post("/login", urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    var u = req.body.username;
    var p = req.body.password;
    res.send('user: ' + req.body.username + ', password: ' + req.body.password);
});