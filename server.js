var express = require('express');
var app = express();

// Relay_channel = [11, 13, 15, 29, 31, 37, 16, 18]
// GPIO:           [17, 27, 22, 5, 6, 26, 23, 24]
var relay1 = require("pi-pins").connect(17);
relay1.mode('out');
relay1.value(true);
var relay2 = require("pi-pins").connect(27);
relay2.mode('out');
relay2.value(true);
var relay3 = require("pi-pins").connect(22);
relay3.mode('out');
relay3.value(true);
var relay4 = require("pi-pins").connect(5);
relay4.mode('out');
relay4.value(true);
var relay5 = require("pi-pins").connect(6);
relay5.mode('out');
relay5.value(true);
var relay6 = require("pi-pins").connect(26);
relay6.mode('out');
relay6.value(true);
var relay7 = require("pi-pins").connect(23);
relay7.mode('out');
relay7.value(true);
var relay8 = require("pi-pins").connect(24);
relay8.mode('out');
relay8.value(true);

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// reply to request...
app.get('/set', function (req, res) {

  var relay = parseInt(req.query.relay, 16);

  if( relay & 0x01 )
    relay1.value(false);
  if( relay & 0x02 )
    relay2.value(false);
  if( relay & 0x04 )
    relay3.value(false);
  if( relay & 0x08 )
    relay4.value(false);
  if( relay & 0x10 )
    relay5.value(false);
  if( relay & 0x20 )
    relay6.value(false);
  if( relay & 0x40 )
    relay7.value(false);
  if( relay & 0x80 )
    relay8.value(false);

  res.send("set: " + req.query.relay);
});

// reply to request...
app.get('/reset', function (req, res) {

  var relay = parseInt(req.query.relay, 16);

  if( relay & 0x01 )
    relay1.value(true);
  if( relay & 0x02 )
    relay2.value(true);
  if( relay & 0x04 )
    relay3.value(true);
  if( relay & 0x08 )
    relay4.value(true);
  if( relay & 0x10 )
    relay5.value(true);
  if( relay & 0x20 )
    relay6.value(true);
  if( relay & 0x40 )
    relay7.value(true);
  if( relay & 0x80 )
    relay8.value(true);

  res.send("reset: " + req.query.relay);
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
