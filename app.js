var http = require("http");
var fs = require("fs");
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/',function(req,res) {
  res.sendFile(__dirname+'/public/index.html');
});
app.get('/public/thanks.html',function(req,res) {
  res.sendFile(__dirname+'/public/thanks.html');
});


// Access the parse results as request.body
app.post('/', function(request, response){
    console.log(request.body.name);
    console.log(request.body.email);
    console.log(request.connection.remoteAddress);
    response.writeHead(302, {'Location': '/public/thanks.html'});
    response.end();
});

app.listen(3000);
