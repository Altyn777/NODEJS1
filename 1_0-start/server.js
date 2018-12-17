var log = require('logger')(module);
var User = require('./user');
var db = require('db')
db.connect();

function run() {
    var nika = new User("Ника");
    var nastya = new User("Настя");

    nika.hello(nastya);
    log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}