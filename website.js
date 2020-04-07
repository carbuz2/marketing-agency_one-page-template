var fs = require('fs');
var http = require('http');
var https = require('https');
var http2 = require('http2');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/build'));

/*if (fs.existsSync( __dirname + '/../certificates2/live/www.carbuzltd.com' )) {
  var privateKey  = fs.readFileSync(__dirname + '/../certificates2/live/www.carbuzltd.com/privkey.pem', 'utf8');
  var certificate = fs.readFileSync(__dirname + '/../certificates2/live/www.carbuzltd.com/cert.pem', 'utf8');
  var credentials = {key: privateKey, cert: certificate};
  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(1443);
  //var http2Server = http2.createSecureServer(credentials, app);
  //http2Server.listen(443);
} */
var httpServer = http.createServer(app);
httpServer.listen(8080)




// your express configuration here





