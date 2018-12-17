http = require('http');
fs = require('fs');
chat = require('./chat');

http.createServer(function (req, res) {

    switch (req.url) {
        case '/':
            sendFile("index.html", res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/publish':
            body = '';
            req
                .on('readable', function () {
                    cont = req.read();
                    if (cont != null){
                        if (cont.length > 1e4) {  // проверка на размер сообщения
                            req.destroy();
                            res.statusCode = 413;
                            res.end("Your message is too big for my little chat");
                        } else {
                            body += cont;
                        }
                    };
                })

                .on('end', function () {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end("Bad Request");
                        return;
                    }

                    chat.publish(body.message);
                    res.end("ok");
                });

            break;

        default:
            res.statusCode = 404;
            res.end("Not Found");
    }

}).listen(3000);

function sendFile(fileName, res) {
    fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function () {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        });
}
