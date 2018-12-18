http = require('http');
log = require('winston');

server = http.createServer();

server.on('request', require('./request'));

server.listen(1337);

log.debug("Server is running");