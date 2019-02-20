var fs = require('fs');
var http = require('http');
//var https = require('https');
var http2 = require('http2');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/build'));

if (fs.existsSync( __dirname + '/../certificates/live/carbuzltd.com' )) {
  var privateKey  = fs.readFileSync(__dirname + '/../certificates/live/carbuzltd.com/privkey.pem', 'utf8');
  var certificate = fs.readFileSync(__dirname + '/../certificates/live/carbuzltd.com/cert.pem', 'utf8');
  var credentials = {key: privateKey, cert: certificate};
  //var httpsServer = https.createServer(credentials, app);
  //httpsServer.listen(8443);
  var http2Server = http2.createSecureServer(credentials, app);
  httpsServer.listen(8080);
} else {
  var httpServer = http.createServer(app);
  httpServer.listen(9223);
}



// your express configuration here





