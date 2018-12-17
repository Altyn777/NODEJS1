module.exports = function (module) {
    return function (/*kkkk*/) {
        var args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    };
};