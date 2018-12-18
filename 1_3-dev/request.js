url = require('url');
log = require('./log')(module);

module.exports = function (req, res) {
    urlParsed = url.parse(req.url,true);

    log.info("Got request", req.method, req.url);

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        message = urlParsed.query.message;
        log.debug("Echo: " + message);
        res.end(message);
        return;
    }
    log.error("Unlnown URL");

    res.statusCode = 404;
    res.end('Not Found');
};