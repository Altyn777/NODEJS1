util = require('util');
phrases = {
    "Hello": "Привет",
    "world": "мир"
};
// message name stack
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError); // сохраняет текущий stack в this
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name);
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Нет такой сртаницы");
    }
    return util.format("%s, %s", getPhrase("Hello"), getPhrase("world"));
}
try {
    page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.log("Ошибка %s\n сообщение: %s\n стек: %s", e.name, e.message, e.stack);
    }
}
