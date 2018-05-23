var http = require('http');
var url = require("url");
var parser = require("./parser");

var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8888);

http.createServer(parser.parser).listen(port);

console.log('Server running at http://127.0.0.1:' + port);