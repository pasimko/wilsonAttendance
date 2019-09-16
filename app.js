var http = require("http");
var fs = require("fs");
var express = require("express");
var sys = require("sys");
const { exec } = require("child_process");

var usersJSON = fs.readFileSync("users.json"); 

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
    var ip = request.connection.remoteAddress;

    exec(`(arping -c 1 -i eth0 $(echo ${ip} | sed -r 's/[^0-9.]+//')) | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'`, (err, stdout, stderr) => {
        if (err) {console.log("Error parsing IP"+stderr);}
        else {
	    console.log(stdout);
        }
    });

    response.writeHead(302, {'Location': '/public/thanks.html'});
    response.end();
});

app.listen(3000);

