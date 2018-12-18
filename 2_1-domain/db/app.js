domain = require('domain');
serverDomain = domain.create();

serverDomain.on('error', function (err) {
    console.error("Server error %s", err);
    if (server) server.close();

    setTimeout(function () {
        process.exit(1);
    }, 1000).unref();
});

serverDomain.run(function () {
    http = require('http');
    handler = require('./handler');

    server = http.createServer(function (req, res) {

        reqDomain = domain.create();
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.on('error', function (err) {
            res.statusCode = 500;
            res.end("Sorry, " + err);
            console.error("Error for req = ", req);

            serverDomain.emit('error', err);
        });

        reqDomain.run(function () {
            handler(req, res);
        });
    });

    server.listen(3000);
});