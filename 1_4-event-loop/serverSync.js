http = require('http');
fs = require('fs');
// Блокирует => используется там, где нет параллелизма
// Работает трай...кетч
// Простой
http.createServer(function (req, res) {
    if (req.url == '/') {

        try {
            info = fs.readFileSync('index.html');
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Server Error!");
            return;
        }

        res.end(info);

    } else {/*404*/}

}).listen(3000);