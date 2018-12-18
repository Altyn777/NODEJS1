domain = require('domain');
fs = require('fs'), http = require('http');

d = domain.create();

d.on('error', function (err) {
    console.error("Домен перехватил %s", err);
});

d.run(function () {
    // d.enter(); -> process.domain

    server = new http.Server();

    // d.exit();
});

server.on('boom', function () {
    setTimeout(function () {
        fs.readfile(__filename, function () {
            ERROR();
        });
    }, 1000);

});

server.emit('boom');