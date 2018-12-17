url = require('url');
querystring = require('querystring');
static = require('node-static');

file = new static.Server('.');// Создание node-static сервера

function accept(req, res) {
    if (req.url == '/vote') {
        setTimeout(function() {
            res.end('Ваш голос принят: ' + new Date());
        }, 1500);
    } else {
        file.serve(req, res);
    }
}
if (!module.parent) {
    require('http').createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}