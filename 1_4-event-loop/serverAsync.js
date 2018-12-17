var http = require('http');
var fs = require('fs');
// NE Блокирует
// NE Работает трай...кетч
// NE Простой
http.createServer(function (req, res) {
    var info;
    if (req.url == '/') {

        fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end("Server Error!");
                return;
            }

            res.end(info);
        });

    } else {/*404*/}

}).listen(3000);