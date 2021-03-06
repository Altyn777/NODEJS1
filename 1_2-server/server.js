http = require('http');
url = require('url');

server = http.createServer();

server.on('request', function (req, res) {
    urlParsed = url.parse(req.url, true);
    debugger;

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
        return;
    }

    res.statusCode = 404;
    res.end('Page not found');

}); // http.Server -> net.Server -> EventEmitter

server.listen(1337);
console.log("Server is running");
