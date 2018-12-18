http = require('http');
fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/') {
        fs.readFile('index.html', function (err, info) { //callback
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("На сервере произошла ERROR");
                return;
            }
            res.end(info);
        });

    }
}).listen(3000);