log = require('logger')(module);
User = require('./user');
db = require('db')
db.connect();

function run() {
    nika = new User("Ника");
    nastya = new User("Настя");

    nika.hello(nastya);
    log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}